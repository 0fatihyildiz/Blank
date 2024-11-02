import type { IconifyInfo } from '@iconify/types'
import { log } from 'node:console'
import { promises as fs } from 'node:fs'
import { dirname } from 'node:path'
import {
    cleanupIconKeyword,
    cleanupSVG,
    importDirectory,
    isEmptyColor,
    parseColors,
    runSVGO,
} from '@iconify/tools'

export interface IconSetOptions {
    sourceDir: string
    targetFile: string
    prefix: string
    expectedSize?: number
    iconSetInfo: IconifyInfo
    metadataSource?: string
}

async function convertSvgIconsToIconifyJSON(options: IconSetOptions) {
    const { sourceDir, targetFile, prefix, expectedSize, iconSetInfo, metadataSource } = options

    const iconSet = await importDirectory(sourceDir, {
        prefix,
    })

    iconSet.info = iconSetInfo

    await iconSet.forEach((name, type) => {
        if (type !== 'icon') {
            return
        }

        const svg = iconSet.toSVG(name)
        if (!svg) {
            iconSet.remove(name)
            return
        }

        if (expectedSize) {
            const viewBox = svg.viewBox
            if (viewBox.width !== expectedSize || viewBox.height !== expectedSize) {
                console.error(`Icon ${name} has invalid dimensions: ${viewBox.width} x ${viewBox.height}`)
                iconSet.remove(name)
                return
            }
        }

        try {
            cleanupSVG(svg)
            parseColors(svg, {
                defaultColor: 'currentColor',
                callback: (_attr, colorStr, color) => {
                    return !color || isEmptyColor(color) ? 'currentColor' : colorStr
                },
            })
            runSVGO(svg)
        }
        catch (err) {
            console.error(`Error parsing ${name}:`, err)
            iconSet.remove(name)
            return
        }

        iconSet.fromSVG(name, svg)
    })

    if (metadataSource) {
        interface MetadataItem {
            id: string
            name: string
            aliases: string[]
            tags: string[]
        }

        const metaContent = JSON.parse(await fs.readFile(metadataSource, 'utf8')) as MetadataItem[]
        metaContent.forEach((entry) => {
            const { name, aliases, tags } = entry
            const cleanName = cleanupIconKeyword(name)
            if (!iconSet.entries[cleanName]) {
                console.error(`Missing icon: ${cleanName}`)
                return
            }

            tags.forEach((category) => {
                iconSet.toggleCategory(cleanName, category, true)
            })

            aliases.forEach((alias) => {
                const cleanAlias = cleanupIconKeyword(alias)
                if (!iconSet.entries[cleanAlias]) {
                    iconSet.setAlias(cleanAlias, cleanName)
                }
            })
        })
    }

    const output = JSON.stringify(iconSet.export(), null, '\t')
    const dir = dirname(targetFile)
    try {
        await fs.mkdir(dir, { recursive: true })
    }
    catch (err) {
        console.error(`Error creating directory ${dir}:`, err)
    }

    await fs.writeFile(targetFile, output, 'utf8')
    log(`Saved ${targetFile} (${output.length} bytes)`)
}

export function optionsSvgToJson(options: IconSetOptions[]) {
    (options || []).forEach(async (option) => {
        await convertSvgIconsToIconifyJSON(option)
    })
}

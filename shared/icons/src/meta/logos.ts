import { type IconSetOptions, optionsSvgToJson } from '@/tools/svgToJson'

const options: IconSetOptions[] = [
    {
        sourceDir: './assets/logos',
        targetFile: './json/logos.json',
        prefix: 'logos',
        iconSetInfo: {
            name: 'Logos',
            author: {
                name: 'Craftwork',
                url: 'https://craftwork.design',
            },
            license: {
                title: 'MIT License',
                url: 'https://opensource.org/licenses/MIT',
            },
            samples: ['logos:github', 'logos:twitter', 'logos:linkedin'],
        },
    },
]

optionsSvgToJson(options)

import { ofetch } from 'ofetch'

const baseURL = 'https://api.github.com/'

async function getCollaborators(owner: string, repo: string): Promise<any[]> {
    const collaborators = await ofetch(`repos/${owner}/${repo}/collaborators?affiliation=direct`, {
        baseURL,
        headers: {
            Authorization: `token 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`,
            Accept: 'application/vnd.github.v3+json',
        },
    })

    if (!collaborators)
        throw createError({ statusCode: 400, statusMessage: 'Collaborators not found.' })

    if (collaborators.message === 'API rate limit exceeded') {
        throw createError({ statusCode: 429, statusMessage: 'API rate limit exceeded. Please try again later.' })
    }

    return collaborators
}

function getRouterParam(event: any, param: string): string | null {
    const params = event.context.params || {}
    return params[param] || null
}

export default defineEventHandler(async (event) => {
    const owner = getRouterParam(event, 'owner')
    const repo = getRouterParam(event, 'repo')

    if (!owner || !repo)
        throw createError({ statusCode: 400, statusMessage: 'Invalid Owner or Repo' })

    const collaborators = await getCollaborators(owner, repo)

    return collaborators
})

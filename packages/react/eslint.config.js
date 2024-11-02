import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
        jsx: true,
        semi: false,
    },
    rules: {
        'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
        'no-console': 0,
        'node/prefer-global/process': 0,
    },
})

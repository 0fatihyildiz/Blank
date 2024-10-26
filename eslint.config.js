import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
        jsx: true,
        semi: false,
    },
    ignores: ['**/dist', '**/node_modules', '**/.tsup', 'pnpm-lock.yaml', 'pnpm-workspace.yaml', '**/playground'],
})

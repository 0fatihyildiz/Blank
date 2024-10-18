import antfu from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
		quotes: 'single',
		semi: false,
	},
	rules: {
		'vue/first-attribute-linebreak': 'off',
		'no-trailing-spaces': ['error', { skipBlankLines: true, ignoreComments: true }],
		'no-console': 0,
		'node/prefer-global/process': 0,
	},
})

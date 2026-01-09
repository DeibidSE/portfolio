// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'@stylistic/arrow-parens': ['error', 'always'],
		'@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'@stylistic/max-statements-per-line': ['error', { max: 2 }],
		'@stylistic/member-delimiter-style': 'off',
		'@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
		'@stylistic/quote-props': ['error', 'as-needed'],
		'@stylisctic/quotes': ['error', 'as-needed'],

		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

		'vue/html-closing-bracket-newline': 'off',
		'vue/html-indent': 'off',
		'vue/html-self-closing': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/no-mutating-props': 'error',
		'vue/no-unused-vars': 'error',
		'vue/no-v-html': 'warn',
		'vue/quote-props': ['error', 'as-needed'],
		'vue/require-default-prop': 'off',
		'vue/require-prop-types': 'off',
		'vue/singleline-html-element-content-newline': 'off',
	},
})

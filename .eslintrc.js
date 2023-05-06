module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'airbnb-typescript',

	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'project': './client/tsconfig.json'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'styled-components'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'warn',
			'never'
		],
		'no-tabs': 'off',
		'react/jsx-indent': [1, 'tab'],
		'@typescript-eslint/comma-dangle': 'off',
		"@typescript-eslint/semi": "off",
		"@typescript-eslint/indent": "off",
		'no-multiple-empty-lines': 'warn',
		"styled-components/rule-name": 2
	}
}

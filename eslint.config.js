const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        ignores: ['dist/**', 'build/**', 'node_modules/**', 'docs/**'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
                'tailwind': 'readonly',
                'SpreadsheetApp': 'readonly',
                'ContentService': 'readonly',
                'Logger': 'readonly'
            }
        },
        rules: {
            'semi': ['warn', 'always'],
            'quotes': ['warn', 'single'],
            'no-unused-vars': ['warn'],
            'no-console': 'off'
        }
    }
];

/* * @type {import("eslint").Linter.Config} */
const config = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    extends: [
        'next/core-web-vitals',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'prettier',
    ],
    rules: {
        // These opinionated rules are enabled in stylistic-type-checked above.
        // Feel free to reconfigure them to your own preference.
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        quotes: [
            2,
            'single',
            { allowTemplateLiterals: true, avoidEscape: true },
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        '@typescript-eslint/consistent-type-imports': [
            'warn',
            {
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-misused-promises': [
            2,
            {
                checksVoidReturn: { attributes: false },
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'index',
                    'external',
                    'parent',
                    'sibling',
                    'internal',
                    'builtin',
                    'object',
                    'type',
                ],
                'newlines-between': 'always',
            },
        ],
        'import/newline-after-import': ['error', { count: 1 }],
        'prettier/prettier': 'error',
    },
};

module.exports = config;

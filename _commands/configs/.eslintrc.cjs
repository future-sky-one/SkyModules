module.exports = {
    root: true,

    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },

    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],

    settings: {
        react: {
            version: 'detect',
        },
    },

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },

    rules: {
        'react-hooks/rules-of-hooks': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        'react/no-unknown-property': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/jsx-no-undef': 'off',
        'prettier/prettier': 'warn',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'off',
        'no-var': 'off',
        semi: 'off',
        'keyword-spacing': ['warn', { before: true }],
        'import/no-empty-named-blocks': 'off',
        'import/order': [
            'warn',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: '#/**',
                        group: 'internal',
                        position: 'before',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',

            plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],

            env: {
                browser: true,
                commonjs: true,
                es6: true,
                node: true,
            },

            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'prettier',
            ],

            settings: {
                react: {
                    version: 'detect',
                },
            },

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2020,
                sourceType: 'module',
            },

            rules: {
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/no-unused-vars': 'warn',
                '@typescript-eslint/camelcase': 'off',
                '@typescript-eslint/naming-convention': ['off'],
                '@typescript-eslint/explicit-function-return-type': ['warn'],
                '@typescript-eslint/interface-name-prefix': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'warn',
                '@typescript-eslint/no-empty-function': 'warn',
                'react-hooks/rules-of-hooks': 'warn',
                'react-hooks/exhaustive-deps': 'off',
                'react/no-unknown-property': 'off',
                'react/react-in-jsx-scope': 'off',
                'react/display-name': 'off',
                'react/prop-types': 'off',
                'react/jsx-no-undef': 'off',
                'prettier/prettier': 'warn',
                'no-console': 'warn',
                'no-debugger': 'warn',
                'no-unused-vars': 'off',
                'no-var': 'off',
                semi: 'off',
                'keyword-spacing': ['warn', { before: true }],
                'import/no-empty-named-blocks': 'off',
                'import/order': [
                    'warn',
                    {
                        groups: [
                            'builtin',
                            'external',
                            'internal',
                            'parent',
                            'sibling',
                            'index',
                            'object',
                            'type',
                        ],
                        pathGroups: [
                            {
                                pattern: '#/**',
                                group: 'internal',
                                position: 'before',
                            },
                        ],
                        'newlines-between': 'always',
                        alphabetize: {
                            order: 'asc',
                            caseInsensitive: true,
                        },
                    },
                ],
            },
        },
    ],
}

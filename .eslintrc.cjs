module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        'plugin:import/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react', 'react-dom'],
                'newlines-between': 'always',
                alphabetize: { order: 'asc' },
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};

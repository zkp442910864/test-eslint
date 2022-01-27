module.exports = {
    // https://github.com/import-js/eslint-plugin-import
    'import/order': ['error', {
        groups:  [
            ['object', 'type'],

            ['builtin', 'external'],

            'internal',

            ['index', 'sibling', 'parent'],
        ],
        pathGroups: [
            {
                pattern: '@/**',
                group: 'internal',
            },
        ],
        // 之间换行
        'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: true,
        // alphabetize: {
        //     order: 'asc',
        //     caseInsensitive: true,
        // },
    }],
    'import/newline-after-import': [2],
};
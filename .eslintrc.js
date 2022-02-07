// https://cn.eslint.org/docs/user-guide/getting-started
// https://cn.eslint.org/docs/user-guide/configuring
// (() => {console.log(12, {a: 1});})();

const reactRules = require('./src/rules/react');
const importRules = require('./src/rules/import');
const publicRules = require('./src/rules/public');

module.exports = {
    env: {
        node: true,
        browser: true,
        commonjs: true,
        // amd: true,
    },
    // https://eslint.org/docs/user-guide/configuring/ignoring-code
    ignorePatterns: [
        '!.eslintrc.js',
    ],
    extends: [
        'plugin:react/recommended',
        'plugin:vue/vue3-recommended',

        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',

        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.ts', '.js', '.jsx', '.json'],
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
            node: {
                paths: ['.'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
        },
    },
    overrides: [
        {
            files: ['*.vue', '*.nvue'],
            rules: {
                // https://eslint.vuejs.org/rules/script-indent.html
                // indent: 'off',
                'vue/mustache-interpolation-spacing': ['error', 'never'],
                'vue/max-attributes-per-line': ['error', {
                    // singleline: {
                    //     max: 4,
                    //     allowFirstLine: true
                    // },
                    // multiline: {
                    //     max: 1,
                    //     allowFirstLine: false
                    // }
                }],
                'vue/no-multiple-template-root': 'off',
                // '@typescript-eslint/indent': 'off',
                'vue/html-quotes': ['error', 'double'],
                // "vue/no-multiple-objects-in-class": ["error"],
                // "vue/component-tags-order": ["error", {
                //     "order": ["template", "script", "style"]
                // }],
                'vue/script-indent': ['error', 4, { // script标签缩进设置
                    baseIndent: 1,
                    switchCase: 1,
                    // "ignores": []
                    // "ignores": ["script"]
                }],
                'vue/html-indent': ['error', 4, {
                    baseIndent: 1,
                    switchCase: 1,
                    ignores: [],
                }],
                // "@typescript-eslint/indent": ["error", 4, {  // script标签缩进设置
                //     // "BaseIndent": 1,
                //     "SwitchCase": 1,
                //     // "MemberExpression": 1,
                //     // "ImportDeclaration": 1,
                //     // "ObjectExpression": 1,
                //     // "VariableDeclarator": 1,
                //     // // "ignoreComments": true,
                //     // "FunctionDeclaration": {
                //     //     "body": 1
                //     // }
                //     // "ignores": ['lang="ts"']
                //     "ignoredNodes": ["ImportDeclaration", "FunctionDeclaration"]
                // }],
            },
        },
    ],
    rules: {
        // TODO: 0|off关闭 1|wran警告 2|error错误
        ...reactRules,
        ...importRules,
        ...publicRules,
    },
};
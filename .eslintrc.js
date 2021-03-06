// https://cn.eslint.org/docs/user-guide/getting-started
// https://cn.eslint.org/docs/user-guide/configuring

const importRules = require('./src/rules/import');
const publicRules = require('./src/rules/public');
// const reactRules = require('./src/rules/react');
// const vueRules = require('./src/rules/vue');

module.exports = {
    env: {
        node: true,
        browser: true,
        commonjs: true,
    },
    ignorePatterns: [
        '!.eslintrc.js',
    ],
    extends: [
        // 'plugin:react/recommended',
        // 'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended',

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
    ],
    settings: {
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
    rules: {
        // TODO: 0|off关闭 1|wran警告 2|error错误
        ...importRules,
        ...publicRules,
    },
};

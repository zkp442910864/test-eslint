# @zzzz-/eslint-config-test


- [eslint 规则](https://eslint.org/docs/rules/)
- [eslint 忽略配置](https://eslint.org/docs/user-guide/configuring/ignoring-code)
- [eslint 配置说明（中文](https://cn.eslint.org/docs/user-guide/configuring/)
- [eslint 规则（中文](https://cn.eslint.org/docs/rules/)
- [typescript-eslint 规则](https://typescript-eslint.io/rules/indent/)
- [vue-eslint 规则](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
- [react-eslint 规则](https://github.com/yannickcr/eslint-plugin-react)

```js
    // package.json
    {
        "dependencies": {
            "@typescript-eslint/eslint-plugin": "^5.9.1",
            "@typescript-eslint/parser": "^5.9.1",
            "eslint": "^8.7.0",
            "eslint-config-standard": "^16.0.3",
            "eslint-import-resolver-alias": "^1.1.2",
            "eslint-plugin-import": "^2.25.4",
            "eslint-plugin-node": "^11.1.0",
            "eslint-plugin-promise": "^6.0.0",
            "eslint-plugin-react": "^7.28.0",
            "eslint-plugin-standard": "^5.0.0",
            "eslint-plugin-vue": "^8.3.0",
            "typescript": "^4.5.4"
        }
    }
```


```js
    // .eslintrc.js
    module.exports = {
        extends: [
            '@zzzz-/eslint-config-test',
        ],
    }
```

```js
    // react .eslintrc.js
    const reactRules = require('@zzzz-/eslint-config-test/src/rules/react');
    module.exports = {
        extends: [
            'plugin:react/recommended',
            '@zzzz-/eslint-config-test',
        ],
        plugins: [
            'react',
        ],
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactRules
        },
    }
```

```js
    // vue .eslintrc.js
    const vueRules = require('@zzzz-/eslint-config-test/src/rules/vue');
    module.exports = {
        // https://eslint.vuejs.org/user-guide/#usage
        extends: [
            'plugin:vue/vue3-recommended',
            // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
            '@zzzz-/eslint-config-test',
        ],
        parser: 'vue-eslint-parser',
        parserOptions: {
            parser: '@typescript-eslint/parser',
        },
        overrides: [
            {
                files: ['*.vue', '*.nvue'],
                rules: {
                    ...vueRules
                },
            },
        ],
        rules: {
            // ...vueRules
        },
    }
```


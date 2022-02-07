# @zzzz-/eslint-config-test


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
    const allConfig = require('@zzzz-/eslint-config-test');
    module.exports = {
        extends: [
            'plugin:react/recommended',
            '@zzzz-/eslint-config-test',
        ],
        rules: {
            ...allConfig.reactRules
        },
    }
```

```js
    // vue .eslintrc.js
    const allConfig = require('@zzzz-/eslint-config-test');
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
                    ...allConfig.vueRules
                },
            },
        ],
        rules: {
            // ...allConfig.vueRules
        },
    }
```


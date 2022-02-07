module.exports = {
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
};
module.exports = {
    // 在插值中强制统一间距
    'vue/mustache-interpolation-spacing': ['error', 'never'],
    // 强制 HTML 属性的引号样式
    'vue/html-quotes': ['error', 'double'],
    // 强制组件顶级元素的顺序
    'vue/component-tags-order': ['error', {
        order: ['template', 'script', 'style'],
    }],
    // 关闭其它规则，避免冲突
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    // script标签缩进设置
    'vue/script-indent': ['error', 4, {
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
    // v-model 禁止自定义修饰符
    'vue/no-custom-modifiers-on-v-model': [2],
    // v-model 是否有效
    'vue/valid-v-model': 2,
    // 节点元素自动闭合
    'vue/html-self-closing': ['error', {
        html: {normal: 'never', void: 'always'},
        svg: 'always',
        math: 'always',
    }],
    // 节点 后尖括号 空格闭合设置
    'vue/html-closing-bracket-spacing': [2, {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
    }],
    // 禁止模板多根节点
    'vue/no-multiple-template-root': 2,
    // 禁用 <template> 上的 key属性
    'vue/no-template-key': 2,
    // 禁用 循环<template> 上的 key属性
    'vue/no-v-for-template-key': 2,
    // 禁止 v-model在自定义组件中添加参数
    'vue/no-v-model-argument': 2,
    // 对指令强制执行有效.sync修饰符 (检查指令.sync上的每个修饰符是否有效
    'vue/valid-v-bind-sync': 2,
    'vue/max-attributes-per-line': [2, {
        singleline: {
            max: 6,
        },
        multiline: {
            max: 1,
        },
    }],
    // 节点属性展示样式（myAttr，my-attr
    'vue/attribute-hyphenation': [2, 'never'],
    // v-slot 插槽展示方式
    'vue/v-slot-style': [1],
    // 强制执行v-on指令样式
    'vue/v-on-style': [1],
    // 强制执行v-bind指令样式
    'vue/v-bind-style': [1],
    // 在单行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': [0, {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        // ignores: ['pre', 'textarea'],
    }],
    // 在多行元素的内容之前和之后需要换行符
    'vue/multiline-html-element-content-newline': [1, {
        ignoreWhenEmpty: true,
        allowEmptyLines: true,
    }],
};
module.exports = {
    // 禁止组件上的某些道具 如：style className
    // 'react/forbid-component-props': ['error'],
    // 禁止 DOM 节点上的某些道具 如：id style
    // 'react/forbid-dom-props': ['error'],
    // 防止在 this.setState 中使用 this.state. 可这样使用 this.setState((prevState) => ({value: prevState.value + 1}));
    'react/no-access-state-in-setstate': ['error'],
    // 防止在键中使用数组索引
    'react/no-array-index-key': ['error'],
    // 生命周期方法应该是原型上的方法，而不是类字段
    // 'react/no-arrow-function-lifecycle': ['error'],
    // 防止使用危险的 JSX 属性 dangerouslySetInnerHTML
    'react/no-danger': [1],
    // 防止同时使用 children 和 dangerouslySetInnerHTML  属性
    'react/no-danger-with-children': [2],
    // 防止直接修改state (排除构造函数)
    'react/no-direct-mutation-state': [1],
    // 防止使用无效属性
    // 'react/no-invalid-html-attribute': [1],
    // 防止每个文件定义多个组件, 忽略无状态组件
    'react/no-multi-comp': [2, {ignoreStateless: true}],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 2,
    // 防止 React.PureComponent 中使用 shouldComponentUpdate 函数
    'react/no-redundant-should-component-update': 2,
    // 防止 ref 使用字符串引用 https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': [1, {noTemplateLiterals: true}],
    // 防止this在无状态功能组件中使用
    'react/no-this-in-sfc': 2,
    // 防止常见的拼写错误
    'react/no-typos': 2,
    // 防止使用不安全的生命周期方法
    // 'react/no-unsafe': [2, {checkAliases: true}],
    'react/no-unstable-nested-components': [2, {allowAsProps: true}],
    // 防止声明组件类的未使用方法
    // 'react/no-unused-class-component-methods': 1,
    // 防止定义未使用的 propTypes
    'react/no-unused-prop-types': 1,
    // 防止定义未使用状态
    'react/no-unused-state': 1,
    // 防止在 componentWillUpdate 中使用 setState
    'react/no-will-update-set-state': [2],
    // 为 React 组件强制执行 ES5 或 ES6 类
    // 'react/prefer-es6-class': ['always'],
    // 继承自 React.Component 的组件，需要定义 shouldComponentUpdate
    'react/require-optimization': [2, {allowDecorators: ['customDecorators']}],
    // 闭合没有children的节点
    'react/self-closing-comp': ['error', {
        component: true,
        html: true,
    }],
    // 强制 propTypes 声明按字母排序
    'react/sort-prop-types': 2,
    // 强制 style样式 使用对象
    'react/style-prop-object': 2,
    // 防止 void DOM 元素（例如<img />, <br />）接收子元素
    'react/void-dom-elements-no-children': 2,
    // 在 JSX 中强制布尔属性表示法
    'react/jsx-boolean-value': [2, 'always'],
    // 验证 JSX 中的右括号位置
    'react/jsx-closing-bracket-location': [2, {
        // 自闭和标签的
        selfClosing: 'tag-aligned',
        // 存在子节点的标签
        nonEmpty: 'tag-aligned',
    }],
    // 验证 JSX 中的结束标记位置
    'react/jsx-closing-tag-location': 2,
    // JSX 中的属性，强制使用大括号或禁止使用不必要的大括号
    'react/jsx-curly-brace-presence': [2, 'never'],
    // JSX 中花括号的换行符
    'react/jsx-curly-newline': [2],
    // 在 JSX 属性中括号内的空格
    'react/jsx-curly-spacing': [2, 'never'],
    // 在 JSX 属性中强制或禁止等号周围的空格
    'react/jsx-equals-spacing': [2],
    // 配置第一个属性的位置
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    // 强制执行 React 片段的简写或标准形式
    'react/jsx-fragments': [2, 'syntax'],
    // 检测缺失的 key属性
    'react/jsx-key': [2],
    // 验证 JSX 最大深度
    // 'react/jsx-max-depth': [1, {max: 6}],
    // 在 JSX 中限制单行上的最大道具
    'react/jsx-max-props-per-line': [2, {
        // maximum: 4,
        maximum: {single: 3, multi: 1},
        // when: 'multiline',
    }],
    // JSX 属性中的否或箭头函数
    'react/jsx-no-bind': [2, {
        allowArrowFunctions: true,
    }],
    // 防止使用javascript:URL https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': 2,
    // 禁止内联 JSX 道具之间有多个空格
    'react/jsx-props-no-multi-spaces': 2,
    // 强制 defaultProps 声明按字母排序
    'react/jsx-sort-default-props': 2,
    // 强制 props 按字母排序
    'react/jsx-sort-props': [2, {
        ignoreCase: true,
        callbacksLast: true,
    }],
    // 在 JSX 中验证右括号前的间距
    'react/jsx-space-before-closing': [2, 'always'],
    // 验证 JSX 左括号和右括号中的空格
    'react/jsx-tag-spacing': [2],
    // 防止 JSX 中使用的变量被错误地标记为未使用
    'react/jsx-uses-vars': [1],
    // 防止多行 JSX 周围缺少括号
    'react/jsx-wrap-multilines': 2,
    // 排序 TODO: 要注意各种版本问题包括编辑插件
    'react/sort-comp': [2, {
        order: [
            'static-variables',
            'static-methods',
            'instance-variables',
            'lifecycle',
            '/^on.+$/',
            'getters',
            'setters',
            '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
            'instance-methods',
            'everything-else',
            'rendering',
        ],
        groups: {
            lifecycle: [
                'state',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
            ],
            rendering: [
                '/^render.+$/',
                'render',
            ],
        },
    }],
};

// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue','prettier'
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier":['error',
    {
      "singleQuote": true,
      "semi": false, //结束是否加分号
      "printWidth": 160,//每行最长字符
      "trailingComma": "none",
      "bracketSpacing": true,
      "jsxBracketSameLine": true
    }
  ],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren':["off","always"],
    "no-unused-vars": ["off", { "args": "none" }],
    "no-const-assign": 2,//禁止修改const声明的变量
    "no-use-before-define": 2,//未定义前不能使用
    "handle-callback-err": "off"
  }
}

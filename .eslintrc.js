/* eslint-disable no-undef */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'indent': ['error', 2], // 缩进使用2个空格
    'quotes': ['error', 'single'], // 强制单引号
    'semi': ['error', 'never'], // 不允许后面有分号
    'vue/require-default-prop': 'off', // 不需要prop设置默认值
    'object-curly-spacing': ['error', 'always'], // 括号必须有空格
    'space-before-function-paren': ['error', 'never'], // 函数后面不允许有空格
    'no-multiple-empty-lines': ['error', { 'max': 1 }], // 不允许超过一行空格
    'no-trailing-spaces': 'error', // 末尾不允许有空格
    'eol-last': ['error', 'always'], // 文件末行有空格
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ], // 变量后面必须换行
    'space-before-blocks': ['error'], // {} 前必须有空格，例如 function() {}
    'camelcase': ['error', { 'properties': 'never' }], // 驼峰变量命名，而且属性名不会要求是驼峰，变量名要求是
    'padded-blocks': ['error', 'never'], // 行内不能有空行
    'comma-dangle': ['error', 'never'] // 对象最后不允许拖尾逗号
  }
}

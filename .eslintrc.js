
const prettierOptions = require('./.prettierrc.json');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/standard',
  ],
  plugins: ['prettier'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    commonjs: true,
    ecmaVersion: 2016
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'class-methods-use-this': 0,
    'newline-per-chained-call': 0,
    'prefer-template': 2,
    'require-yield': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    // Prettier changes return statement of
    // arrow functions declarative
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/imports-first': 2,
    'import/newline-after-import': 2,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js"
        ]
      }
    }
  },
};



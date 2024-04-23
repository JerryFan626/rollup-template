module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base', // 保持 airbnb-base 规则
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // 自定义或覆盖规则
  },
};

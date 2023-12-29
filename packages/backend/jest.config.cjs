module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$'
};

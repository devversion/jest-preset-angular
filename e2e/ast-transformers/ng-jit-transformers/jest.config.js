module.exports = {
  resolver : '<rootDir>/../../../build-bundled/resolvers/ng-jest-resolver',
  setupFilesAfterEnv : ['<rootDir>/../../../setup-jest.js'],
  testEnvironment : 'jsdom',
  transform : {
    '^.+\\.(ts|js|mjs|html)$' :
                              [
                                '<rootDir>/../../../build-bundled/index.js',
                                require('./ts-jest.config')
                              ],
  },
  transformIgnorePatterns : ['node_modules/(?!.*\\.mjs$)'],
};

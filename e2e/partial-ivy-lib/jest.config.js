module.exports = {
  moduleFileExtensions : ['ts', 'html', 'js', 'json', 'mjs'],
  resolver : '<rootDir>/../../build-bundled/resolvers/ng-jest-resolver.js',
  setupFilesAfterEnv : ['<rootDir>/../../setup-jest.js'],
  testEnvironment : 'jsdom',
  transform : {
    '^.+\\.(ts|js|mjs|html)$' : '<rootDir>/../../build-bundled/index.js',
  },
  transformIgnorePatterns : ['node_modules/(?!.*\\.mjs$)'],
};

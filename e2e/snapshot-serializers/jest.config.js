module.exports = {
  resolver : '<rootDir>/../../build-bundled/resolvers/ng-jest-resolver',
  setupFilesAfterEnv : ['<rootDir>/../../setup-jest.js'],
  snapshotSerializers :
                      [
                        '<rootDir>/../../build-bundled/serializers/html-comment',
                        '<rootDir>/../../build-bundled/serializers/ng-snapshot',
                        '<rootDir>/../../build-bundled/serializers/no-ng-attributes',
                      ],
  testEnvironment : 'jsdom',
  transform : {
    '^.+\\.(ts|js|mjs|html)$' :
                              [
                                '<rootDir>/../../build-bundled/index.js',
                                require('./ts-jest.config')
                              ],
  },
  transformIgnorePatterns : ['node_modules/(?!.*\\.mjs$)'],
};

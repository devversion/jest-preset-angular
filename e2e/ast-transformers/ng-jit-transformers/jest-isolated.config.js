const baseCfg = require('./jest.config');

module.exports = {
  ...baseCfg,
  transform : {
    ...baseCfg.transform,
    '^.+\\.(ts|js|mjs|html)$' :
                              [
                                '<rootDir>/../../../build-bundled/index.js',
                                {
                                  ...require('./ts-jest.config'),
                                  isolatedModules : true,
                                },
                              ],
  },
};

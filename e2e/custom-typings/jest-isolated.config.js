const baseCfg = require('./jest.config');

module.exports = {
  ...baseCfg,
  transform : {
    '^.+\\.(ts|js|html)$' :
                          [
                            '<rootDir>/../../build-bundled/index.js',
                            {
                              isolatedModules : true,
                            },
                          ],
  },
};

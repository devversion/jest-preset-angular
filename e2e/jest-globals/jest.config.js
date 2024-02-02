module.exports = {
  injectGlobals : false,
  transform : {
    '^.+\\.(ts|js|html)$' : '<rootDir>/../../build-bundled/index.js'
  },
};

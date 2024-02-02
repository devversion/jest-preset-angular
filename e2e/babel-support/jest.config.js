module.exports = {
  transform : {
    '^.+\\.(ts|js|html)$' :
                          [
                            '<rootDir>/../../build-bundled/index.js',
                            require('./ts-jest.config')
                          ],
  },
};

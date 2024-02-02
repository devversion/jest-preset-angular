module.exports = {
  globals : {
    ngJest : {
      processWithEsbuild : ['**/node_modules/lodash-es/*.js'],
    },
  },
  transform : {
    '^.+\\.(ts|js|mjs)$' :
                         [
                           '<rootDir>/../../build-bundled/index.js',
                           {
                             tsconfig : 'tsconfig.spec.json',
                             isolatedModules : true,
                           },
                         ],
  },
  transformIgnorePatterns : ['node_modules/(?!lodash-es)'],
};

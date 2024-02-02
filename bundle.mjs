import {build} from 'esbuild';

await build({
  bundle: true,
  entryPoints: [
    'build/index.js',
    'build/resolvers/ng-jest-resolver.js',  // All entry-points
  ],
  outdir: './build-bundled/',
  format: 'cjs',
  platform: 'node',
  inject: [
    'cjs_esm_interop.js',
  ],
  define: {
    'import.meta.url': 'import_meta_url',
  },
  external: ['esbuild', 'ts-jest']
})

import { defineConfig } from 'tsdown'

export default defineConfig({
  alias: {
    '@': 'src'
  },
  dts: {
    cjsReexport: true,
    generator: 'oxc'
  },
  entry: 'src/index.ts',
  fixedExtension: false,
  format: ['cjs', 'esm'],
  tsconfig: '.config/tsconfig.app.json'
})

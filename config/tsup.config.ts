import { resolve } from 'node:path'

import { defineConfig } from 'tsup'

const currentPath = import.meta.dirname
const sourceDir = resolve(currentPath, '../src')

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: {
    index: resolve(sourceDir, 'index.ts')
  },
  format: ['cjs', 'esm'],
  outDir: 'dist',
  target: 'esnext',
  tsconfig: resolve(currentPath, '../tsconfig.json')
})

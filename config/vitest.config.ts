import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../src/', import.meta.url))
    }
  },
  test: {
    coverage: {
      all: true,
      include: ['src/']
    },
    root: fileURLToPath(new URL('../', import.meta.url))
  }
})

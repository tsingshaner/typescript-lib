import { resolve } from 'node:path'

import { qingshanerESLintConfig } from '@qingshaner/eslint-config'

export default qingshanerESLintConfig({
  ignores: [[], resolve(import.meta.dirname, '.gitignore')],
  jsonc: true,
  perfectionist: true,
  typescript: [import.meta.dirname],
  useBiome: true
})

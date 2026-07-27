import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/ltree.js'

/** ltree for every PGlite runtime target (classic + multi-memory). */
export const ltree = defineExtension({
  name: 'ltree',
  version: '1.3',
  backend: generatedExtensionBackend,
})

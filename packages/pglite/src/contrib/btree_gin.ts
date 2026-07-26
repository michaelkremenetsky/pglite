import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/btree_gin.js'

/** btree_gin for every PGlite runtime target (classic + multi-memory). */
export const btree_gin = defineExtension({
  name: 'btree_gin',
  version: '1.3',
  backend: generatedExtensionBackend,
})

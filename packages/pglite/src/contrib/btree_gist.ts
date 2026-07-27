import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/btree_gist.js'

/** btree_gist for every PGlite runtime target (classic + multi-memory). */
export const btree_gist = defineExtension({
  name: 'btree_gist',
  version: '1.8',
  backend: generatedExtensionBackend,
})

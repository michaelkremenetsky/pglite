import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/hstore.js'

/** hstore for every PGlite runtime target (classic + multi-memory). */
export const hstore = defineExtension({
  name: 'hstore',
  version: '1.8',
  backend: generatedExtensionBackend,
})

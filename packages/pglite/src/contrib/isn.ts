import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/isn.js'

/** isn for every PGlite runtime target (classic + multi-memory). */
export const isn = defineExtension({
  name: 'isn',
  version: '1.3',
  backend: generatedExtensionBackend,
})

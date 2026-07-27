import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/tablefunc.js'

/** tablefunc for every PGlite runtime target (classic + multi-memory). */
export const tablefunc = defineExtension({
  name: 'tablefunc',
  version: '1.0',
  backend: generatedExtensionBackend,
})

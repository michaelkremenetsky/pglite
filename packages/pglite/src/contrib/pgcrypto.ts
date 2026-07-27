import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pgcrypto.js'

/** pgcrypto for every PGlite runtime target (classic + multi-memory). */
export const pgcrypto = defineExtension({
  name: 'pgcrypto',
  version: '1.4',
  backend: generatedExtensionBackend,
})

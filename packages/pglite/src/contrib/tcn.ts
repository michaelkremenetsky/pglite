import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/tcn.js'

/** tcn for every PGlite runtime target (classic + multi-memory). */
export const tcn = defineExtension({
  name: 'tcn',
  version: '1.0',
  backend: generatedExtensionBackend,
})

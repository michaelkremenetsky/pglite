import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/lo.js'

/** lo for every PGlite runtime target (classic + multi-memory). */
export const lo = defineExtension({
  name: 'lo',
  version: '1.2',
  backend: generatedExtensionBackend,
})

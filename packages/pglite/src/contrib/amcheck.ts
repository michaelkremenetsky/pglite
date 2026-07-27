import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/amcheck.js'

/** amcheck for every PGlite runtime target (classic + multi-memory). */
export const amcheck = defineExtension({
  name: 'amcheck',
  version: '1.5',
  backend: generatedExtensionBackend,
})

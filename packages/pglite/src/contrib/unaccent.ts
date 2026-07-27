import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/unaccent.js'

/** unaccent for every PGlite runtime target (classic + multi-memory). */
export const unaccent = defineExtension({
  name: 'unaccent',
  version: '1.1',
  backend: generatedExtensionBackend,
})

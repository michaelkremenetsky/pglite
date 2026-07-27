import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/citext.js'

/** citext for every PGlite runtime target (classic + multi-memory). */
export const citext = defineExtension({
  name: 'citext',
  version: '1.8',
  backend: generatedExtensionBackend,
})

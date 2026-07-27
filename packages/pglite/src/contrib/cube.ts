import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/cube.js'

/** cube for every PGlite runtime target (classic + multi-memory). */
export const cube = defineExtension({
  name: 'cube',
  version: '1.5',
  backend: generatedExtensionBackend,
})

import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/earthdistance.js'

/** earthdistance for every PGlite runtime target (classic + multi-memory). */
export const earthdistance = defineExtension({
  name: 'earthdistance',
  version: '1.2',
  backend: generatedExtensionBackend,
})

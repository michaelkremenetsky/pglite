import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/intarray.js'

/** intarray for every PGlite runtime target (classic + multi-memory). */
export const intarray = defineExtension({
  name: 'intarray',
  version: '1.5',
  backend: generatedExtensionBackend,
})

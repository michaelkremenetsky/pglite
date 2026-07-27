import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/dict_int.js'

/** dict_int for every PGlite runtime target (classic + multi-memory). */
export const dict_int = defineExtension({
  name: 'dict_int',
  version: '1.0',
  backend: generatedExtensionBackend,
})

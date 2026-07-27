import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/dict_xsyn.js'

/** dict_xsyn for every PGlite runtime target (classic + multi-memory). */
export const dict_xsyn = defineExtension({
  name: 'dict_xsyn',
  version: '1.0',
  backend: generatedExtensionBackend,
})

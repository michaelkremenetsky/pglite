import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/seg.js'

/** seg for every PGlite runtime target (classic + multi-memory). */
export const seg = defineExtension({
  name: 'seg',
  version: '1.4',
  backend: generatedExtensionBackend,
})

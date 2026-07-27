import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/bloom.js'

/** bloom for every PGlite runtime target (classic + multi-memory). */
export const bloom = defineExtension({
  name: 'bloom',
  version: '1.0',
  backend: generatedExtensionBackend,
})

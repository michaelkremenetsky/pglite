import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pageinspect.js'

/** pageinspect for every PGlite runtime target (classic + multi-memory). */
export const pageinspect = defineExtension({
  name: 'pageinspect',
  version: '1.13',
  backend: generatedExtensionBackend,
})

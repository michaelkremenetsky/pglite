import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/file_fdw.js'

/** file_fdw for every PGlite runtime target (classic + multi-memory). */
export const file_fdw = defineExtension({
  name: 'file_fdw',
  version: '1.0',
  backend: generatedExtensionBackend,
})

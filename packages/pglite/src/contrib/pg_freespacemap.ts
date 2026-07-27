import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pg_freespacemap.js'

/** pg_freespacemap for every PGlite runtime target (classic + multi-memory). */
export const pg_freespacemap = defineExtension({
  name: 'pg_freespacemap',
  version: '1.3',
  backend: generatedExtensionBackend,
})

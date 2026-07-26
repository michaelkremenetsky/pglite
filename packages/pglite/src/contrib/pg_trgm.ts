import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pg_trgm.js'

/** pg_trgm for every PGlite runtime target (classic + multi-memory). */
export const pg_trgm = defineExtension({
  name: 'pg_trgm',
  version: '1.6',
  backend: generatedExtensionBackend,
})

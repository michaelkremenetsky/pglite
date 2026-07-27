import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pg_buffercache.js'

/** pg_buffercache for every PGlite runtime target (classic + multi-memory). */
export const pg_buffercache = defineExtension({
  name: 'pg_buffercache',
  version: '1.6',
  backend: generatedExtensionBackend,
})

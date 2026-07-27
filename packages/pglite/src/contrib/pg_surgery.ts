import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pg_surgery.js'

/** pg_surgery for every PGlite runtime target (classic + multi-memory). */
export const pg_surgery = defineExtension({
  name: 'pg_surgery',
  version: '1.0',
  backend: generatedExtensionBackend,
})

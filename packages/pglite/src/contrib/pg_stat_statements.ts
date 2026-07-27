import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pg_stat_statements.js'

/** pg_stat_statements for every PGlite runtime target (classic + multi-memory). */
export const pg_stat_statements = defineExtension({
  name: 'pg_stat_statements',
  version: '1.12',
  backend: generatedExtensionBackend,
})

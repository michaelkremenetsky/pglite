import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pg_visibility.js'

/** pg_visibility for every PGlite runtime target (classic + multi-memory). */
export const pg_visibility = defineExtension({
  name: 'pg_visibility',
  version: '1.2',
  backend: generatedExtensionBackend,
})

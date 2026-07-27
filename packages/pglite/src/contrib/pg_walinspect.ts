import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/pg_walinspect.js'

/** pg_walinspect for every PGlite runtime target (classic + multi-memory). */
export const pg_walinspect = defineExtension({
  name: 'pg_walinspect',
  version: '1.1',
  backend: generatedExtensionBackend,
})

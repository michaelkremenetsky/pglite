import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/tsm_system_rows.js'

/** tsm_system_rows for every PGlite runtime target (classic + multi-memory). */
export const tsm_system_rows = defineExtension({
  name: 'tsm_system_rows',
  version: '1.0',
  backend: generatedExtensionBackend,
})

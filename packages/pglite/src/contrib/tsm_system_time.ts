import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/tsm_system_time.js'

/** tsm_system_time for every PGlite runtime target (classic + multi-memory). */
export const tsm_system_time = defineExtension({
  name: 'tsm_system_time',
  version: '1.0',
  backend: generatedExtensionBackend,
})

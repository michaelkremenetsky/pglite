import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/auto_explain.js'

/** auto_explain for every PGlite runtime target (classic + multi-memory). */
export const auto_explain = defineExtension({
  name: 'auto_explain',
  version: '1.0',
  backend: generatedExtensionBackend,
})

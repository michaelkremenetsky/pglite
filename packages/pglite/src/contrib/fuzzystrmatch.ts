import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/fuzzystrmatch.js'

/** fuzzystrmatch for every PGlite runtime target (classic + multi-memory). */
export const fuzzystrmatch = defineExtension({
  name: 'fuzzystrmatch',
  version: '1.2',
  backend: generatedExtensionBackend,
})

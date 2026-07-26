import { defineExtension } from '../extension'

import { generatedExtensionBackend } from './generated/uuid-ossp.js'

/** uuid-ossp for every PGlite runtime target (classic + multi-memory). */
export const uuid_ossp = defineExtension({
  name: 'uuid-ossp',
  version: '1.1',
  backend: generatedExtensionBackend,
})

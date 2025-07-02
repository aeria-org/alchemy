import { createRouter } from 'aeria'
import { contracts } from '../.aeria/out/index.js'

export const personRouter = createRouter()

personRouter.POST('/hello', (context) => {
  return {
    message: `Hello, ${context.request.payload.name}`,
  }
}, contracts.PersonHello)


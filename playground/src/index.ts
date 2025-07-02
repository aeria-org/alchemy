import { init, createRouter } from 'aeria'
import { person, personRouter } from '@albedo-toolkit/example'

export const collections = {
  person,
}

export const router = createRouter()
router.group('/person', personRouter)

export default init()


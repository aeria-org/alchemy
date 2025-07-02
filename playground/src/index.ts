import { init, createRouter } from 'aeria'
import { person, personRouter } from '@aeria-alchemy/example'

export const collections = {
  person,
}

export const router = createRouter()
router.group('/person', personRouter)

export default init()


import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/:albumId', isLoggedIn, profilesCtrl.show)

export {
  router
}
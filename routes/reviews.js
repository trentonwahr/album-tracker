import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.delete('/:reviewId', isLoggedIn, reviewsCtrl.delete)

export {
  router
}
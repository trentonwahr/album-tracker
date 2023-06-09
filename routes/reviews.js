import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/:reviewId/edit', isLoggedIn, reviewsCtrl.edit)
router.put('/:reviewId', isLoggedIn, reviewsCtrl.update)
router.delete('/:reviewId', isLoggedIn, reviewsCtrl.delete)

export {
  router
}
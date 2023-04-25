import { Router } from 'express'
import * as albumsCtrl from '../controllers/albums.js'
import { isLoggedIn } from '../middleware/middleware.js'
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()

router.get('/', albumsCtrl.index)
router.get('/new', isLoggedIn, albumsCtrl.new)
router.get('/:albumId', albumsCtrl.show)
router.get('/:albumId/edit', isLoggedIn, albumsCtrl.edit)
router.post('/', isLoggedIn, albumsCtrl.create)
router.put('/:albumId', isLoggedIn, albumsCtrl.update)
router.delete('/:albumId', isLoggedIn, albumsCtrl.delete)

router.post('/:albumId/reviews', isLoggedIn, reviewsCtrl.createReview)

export {
  router
}
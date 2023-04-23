import { Router } from 'express'
import * as albumsCtrl from '../controllers/albums.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', albumsCtrl.index)
router.get('/new', albumsCtrl.new)
router.get('/:albumId', albumsCtrl.show)
router.get('/:albumId/edit', albumsCtrl.edit)
router.post('/', albumsCtrl.create)
router.put('/:albumId', albumsCtrl.update)
router.delete('/:albumId', albumsCtrl.delete)

export {
  router
}
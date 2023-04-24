import { AlbumReview } from "../models/review.js"
import { Album } from "../models/album.js"

function create(req, res) {
  AlbumReview.create(req.body)
  .then(review => {
    res.redirect(`/albums/${album._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/albums/${album._id}`)
  })
}

export {
  create,
}
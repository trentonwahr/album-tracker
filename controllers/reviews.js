import { AlbumReview } from "../models/review.js"
import { Album } from "../models/album.js"
import { Profile } from '../models/profile.js'


function create(req, res) {
  req.body.author = req.user.profile._id
  AlbumReview.create(req.body)
  .then(review => {
    Album.findById(req.params.albumId)
    .then(album => {
      album.reviews.push(req.body.reviewId)
      album.save()
      .then(() => {
        res.redirect(`/albums/${album._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect(`/albums`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/albums`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/albums`)
  })
}

export {
  create,
}
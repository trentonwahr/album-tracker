import { AlbumReview } from "../models/review.js"
import { Album } from "../models/album.js"
import { Profile } from '../models/profile.js'


function createReview(req, res) {
  req.body.author = req.user.profile._id
  AlbumReview.create(req.body)
  .then(review => {
    Album.findById(req.params.albumId)
    .then(album => {
      album.reviews.push(review._id)
      album.save()
      .then(() => {
        res.redirect(`/albums/${album._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect(`/albums/${album._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/albums/${album._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/albums/${album._id}`)
  })
}

function deleteReview(rew, res) {
  
}

export {
  createReview,
  deleteReview as delete,
}
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

function edit(req, res) {
  AlbumReview.findById(req.params.reviewId)
  .then(review => {
    res.render('reviews/edit', {
      review,
      title: 'Edit Review',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/albums')
  })
}

function update(req, res) {
  
}

function deleteReview(req, res) {
  AlbumReview.findById(req.params.reviewId)
  .then(review => {
    if (review.owner.equals(req.user.profile._id)) {
      review.deleteOne()
      .then(() => {
        res.redirect('/albums')
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
    } else {
      throw new Error('Not Authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/albums')
  })
}

export {
  createReview,
  edit,
  update,
  deleteReview as delete,
}
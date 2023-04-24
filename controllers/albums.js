import { Album } from "../models/album.js"
import { AlbumReview } from "../models/review.js"

function index(req, res) {
  Album.find({})
  .then(albums => {
    res.render('albums/index', {
      albums,
      title: 'All Albums',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newAlbum(req, res) {
  res.render('albums/new', {
    title: 'Add Album',
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Album.create(req.body)
  .then(album => {
    res.redirect(`/albums/${album._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/albums/new')
  })
}

function show(req, res) {
  Album.findById(req.params.albumId)
  .populate("reviews")
  // .populate("owner")
  .then(album => {
    res.render('albums/show', {
      album,
      title: "Album Details",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/albums')
  })
}

function edit(req, res) {
  Album.findById(req.params.albumId)
  .then(album => {
    res.render('albums/edit', {
      album,
      title: 'Edit Album',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/albums')
  })
}

function update(req, res) {
  Album.findById(req.params.albumId)
  .then(album => {
    if (album.owner.equals(req.user.profile._id)) {
      album.updateOne(req.body)
      .then(() => {
        res.redirect(`/albums/${album._id}`)
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
    res.redirect('/')
  })
}

function deleteAlbum(req, res) {
  Album.findById(req.params.albumId)
  .then(album => {
    if (album.owner.equals(req.user.profile._id)) {
      album.deleteOne()
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
  index,
  newAlbum as new,
  create,
  show,
  edit,
  update,
  deleteAlbum as delete,
}
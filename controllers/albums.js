import { Album } from "../models/album.js"

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
  Album.findByIdAndUpdate(req.params.albumId, req.body, {new: true})
  .then(album => {
    res.redirect(`/albums/${album._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/albums')
  })
}

function deleteAlbum(req, res) {
  Album.findByIdAndDelete(req.params.albumId)
  .then(album => {
    res.redirect('/albums')
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
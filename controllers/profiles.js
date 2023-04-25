import { Profile } from '../models/profile.js'
import { Album } from "../models/album.js"
import { AlbumReview } from "../models/review.js"


function show(req, res) {
  Profile.findById(req.params.profileId)
  .populate('albums')
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: 'My Profile',
      profile,
      albums,
      isSelf
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect('/albums')
  })
}

export {
  show,
}
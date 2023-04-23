import { Profile } from '../models/profile.js'

function show(req, res) {
  Profile.findById(req.params.albumId)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
  })
}

export {
  show,
}
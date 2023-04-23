import { Profile } from '../models/profile.js'


function show(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: 'My Profile',
      profile,
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
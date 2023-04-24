import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  albumReviews: [{type: Schema.Types.ObjectId, ref: 'AlbumReview'}],
  albums: [{type: Schema.Types.ObjectId, ref: 'Albums'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}

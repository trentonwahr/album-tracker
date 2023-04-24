import mongoose from 'mongoose'

const Schema = mongoose.Schema

const albumSchema = new Schema({
  name: String,
  artist: String,
  releaseYear: Number,
  genre: String,
  reviews: [{type: Schema.Types.ObjectId, ref: 'AlbumReview'}],
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
}, {
  timestamps: true
})

const Album = mongoose.model('Album', albumSchema)

export {
  Album
}
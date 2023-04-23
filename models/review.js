import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: Number,
  favoriteSong: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  album: {type: Schema.Types.ObjectId, ref: 'Album'},
}, {
  timestamps: true
})

const AlbumReview = mongoose.model('AlbumReview', reviewSchema)

export {
  AlbumReview
}
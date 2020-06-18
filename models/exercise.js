const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    // `Date.now` returns the current unix timestamp as a number
    // currently doing this default in the controller too
    default: Date.now
  }
})

//Export function to create "Exercise" model class
module.exports = mongoose.model('Exercise', ExerciseSchema );
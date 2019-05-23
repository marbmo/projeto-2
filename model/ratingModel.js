const mongoose = require('mongoose');

const { Schema } = mongoose;

const RatingModel = mongoose.model('Rating', new Schema({
  text: String,
  userId: String,
  nameUser: String,
  schoolId: String,
  rating: Number,
}));

module.exports = RatingModel;
const mongoose = require('mongoose');

const { Schema } = mongoose;

const pictureSchema = new Schema({
  name: String,
  path: String,
  originalName: String,
  schoolId: { type: String, unique: true },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const PictureModel = mongoose.model("Picture", pictureSchema);

module.exports = PictureModel;
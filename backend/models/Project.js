const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String],
  images: [String], // array of image URLs
  liveDemo: { type: String },
  githubRepo: { type: String },
  year: { type: Number }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);

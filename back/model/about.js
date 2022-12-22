const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

const About = mongoose.model('about', AboutSchema);

module.exports = { About };

const mongoose = require('mongoose');
const moment = require('moment');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
    default: moment().format('MMMM DD, YYYY'),
  },
  main_func: {
    type: String,
    required: true,
  },
  front: [{ stack: { type: String } }],
  back: [{ stack: { type: String } }],
  db: [{ stack: { type: String } }],
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = { Project };

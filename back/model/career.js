const mongoose = require('mongoose');
const moment = require('moment');

const CareerSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  employment_date: {
    type: Date,
    default: moment().format('YYYY.MM.DD'),
  },
  end_date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tasks: [
    {
      title: {
        type: String,
        required: true,
      },
      task: {
        type: String,
        required: true,
      },
    },
  ],
});

const Career = mongoose.model('career', CareerSchema);

module.exports = { Career };

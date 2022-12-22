const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['front', 'back', 'vc', 'communication'],
  },
  stacks: [
    {
      img: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  ],
});

const Skill = mongoose.model('skill', SkillSchema);

module.exports = { Skill };

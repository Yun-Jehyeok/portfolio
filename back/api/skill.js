const express = require('express');
const { Skill } = require('../model/skill');

const router = express.Router();

// Get Skill
router.get('/', async (req, res) => {
  const skill = await Skill.find();

  if (!skill)
    return res
      .status(400)
      .json({ success: false, msg: 'Skill 정보를 가져오지 못했습니다.' });

  res.status(200).json({
    success: true,
    skill,
  });
});

// Edit Skill
router.put('/', (req, res) => {
  const { id, stacks } = req.body;

  Skill.findByIdAndUpdate(id, {
    stacks,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;

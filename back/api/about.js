const express = require('express');
const { About } = require('../model/about');

const router = express.Router();

// Get About
router.get('/', async (req, res) => {
  const about = await About.find();

  if (!about)
    return res
      .status(400)
      .json({ success: false, msg: 'About 정보를 가져오지 못했습니다.' });

  res.status(200).json({
    success: true,
    about,
  });
});

// Edit About
router.put('/', (req, res) => {
  const { id, content } = req.body;

  About.findByIdAndUpdate(id, {
    content,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(400).json({ success: false });
    });
  res.status(200).end();
});

module.exports = router;

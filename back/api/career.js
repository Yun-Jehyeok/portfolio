const express = require('express');
const { Career } = require('../model/career');

const router = express.Router();

// Get Career
router.get('/', async (req, res) => {
  const career = await Career.find();

  if (!career)
    return res
      .status(400)
      .json({ success: false, msg: 'Career 정보를 가져오지 못했습니다.' });

  res.status(200).json({
    success: true,
    career,
  });
});

// Edit Career
router.put('/', (req, res) => {
  res.status(200).end();
});

module.exports = router;

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
  const { id, company, start_date, end_date, content, tasks } = req.body;
  Career.findByIdAndUpdate(id, {
    company,
    employment_date: start_date,
    end_date,
    content,
    tasks,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((e) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;

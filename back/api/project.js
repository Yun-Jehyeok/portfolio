const express = require('express');
const { Project } = require('../model/project');

const router = express.Router();

// Get Project
router.get('/', async (req, res) => {
  const project = await Project.find();

  if (!project)
    return res
      .status(400)
      .json({ success: false, msg: 'Project 정보를 가져오지 못했습니다.' });

  res.status(200).json({
    success: true,
    project,
  });
});

// Edit Project
router.put('/', (req, res) => {
  res.status(200).end();
});

module.exports = router;

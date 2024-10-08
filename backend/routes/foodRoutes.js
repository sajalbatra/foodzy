const express = require('express');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/menu', protect, (req, res) => {
  res.json({ message: 'Here’s your protected food menu!' });
});

module.exports = router;

const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Register route
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password should be at least 6 characters long').isLength({ min: 6 }),
  ],
  registerUser
);

// Login route
router.post('/login', loginUser);

module.exports = router;

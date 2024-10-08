const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

// Register a new user
const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ name, email, password });
    await user.save();

    // Return JWT
    res.status(201).json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Return JWT
    res.json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser };
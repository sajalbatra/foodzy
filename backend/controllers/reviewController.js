const Review = require('../models/Review');

exports.submitReview = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const newReview = new Review({ name, rating, comment });
    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully', review: newReview });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting review', error: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving reviews', error: error.message });
  }
};
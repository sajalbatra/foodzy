const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/reviews', reviewController.submitReview);
router.get('/reviews', reviewController.getAllReviews);
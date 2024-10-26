import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    comment: String,
    date: { type: Date, default: Date.now }
  });
  
  const Review = mongoose.model('Review', reviewSchema);
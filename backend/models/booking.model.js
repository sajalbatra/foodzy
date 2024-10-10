import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assumes a User schema exists
      required: true
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Table',
      required: true
    },
    bookingDate: {
      type: Date,
      required: true
    },
    timeSlot: {
      type: String,
      required: true // Example format: '18:00 - 20:00'
    },
    status: {
      type: String,
      enum: ['confirmed', 'cancelled', 'completed'],
      default: 'confirmed'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking
import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    tableNumber: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true
    }
  });
  
  const Table = mongoose.model('Table', tableSchema);
  
  export default Table
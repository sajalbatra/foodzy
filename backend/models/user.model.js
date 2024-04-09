import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    lowercase: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    maxlength: 10,
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  role: {
    type: String,
    enum: ["user", "admin","moderator"],
    default: "user",
  },
  password: {
    type: String, 
    required: true 
  },
  createdAt:{ 
    type: Date, 
    default: Date.now 
  },

});

const User = mongoose.model("user", userSchema);

export default User;

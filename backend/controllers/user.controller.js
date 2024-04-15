import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const secretKey = process.env.SECRET_KEY;

export const userSignup = async (req, res) => {
  try {
    const { name, userName, email, phoneNumber, password } = req.body;
    if ((!name, !userName, !email, !phoneNumber, !password)) {
      res.json({
        status: false,
        message: "All fields are required.",
      });
    }
    const phoneNumberString = phoneNumber.toString();
    if (phoneNumberString.length !== 10) {
        console.log(phoneNumberString.length);
        return res.json({
          status: false,
          message: "Phone number should be 10 digits",
        });
      }
      
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = new User({
      name,
      userName,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    await newuser.save();
    const token=jwt.sign({
      userID: newuser._id
    }, secretKey, { expiresIn: 60 * 60 });
    res.header('Authorization', `Bearer ${token}`);
    res.header('X-Token-Expires-In', '3600');
    return res.json({
      status: true,
      message: "Login successful.",
      token: token,
    }); 
  }catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    
    if (!existingUser) {
      return res.json({
        status: false,
        message: "Invalid username or password.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    
    if (!passwordMatch) {
      return res.json({
        status: false,
        message: "Invalid username or password.",
      });
    }

    // If the user exists and the password matches, generate and return a token
    const token = jwt.sign({
      userID: existingUser._id
    }, secretKey, { expiresIn: 60 * 60 });
    res.header('Authorization', `Bearer ${token}`);
    res.header('X-Token-Expires-In', '3600');
    return res.json({
      status: true,
      message: "Login successful.",
      token: token,
    });
  } catch (error) {
    console.error("Error in user login:", error);
    res.status(500).json({ error: "An error occurred in user login" });
  }
};

export const updateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const userDataToUpdate = req.body;
      // Validate if userId is provided
      if (!userId) {
        return res.status(400).json({ error: "User ID is required." });
      }
      // Update user data
      const updatedUser = await User.findByIdAndUpdate(userId, userDataToUpdate, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found." });
      }
      res.json({ success: true, user: updatedUser });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ error: "An error occurred while updating the user" });
    }
};

export const getUser = async (req, res) => {
    try {
      const { userId } = req.params;
      // Validate if userId is provided
      if (!userId) {
        return res.status(400).json({ error: "User ID is required." });
      }
      // Find user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      res.json({ success: true, user });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "An error occurred while fetching the user" });
    }
};


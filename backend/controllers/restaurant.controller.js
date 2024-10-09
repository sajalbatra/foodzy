import Restaurant from "../models/restaurant.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

// Sign up a restaurant
export const restaurantSignup = async (req, res) => {
  try {
    const { name, address, coordinates, description, password, email, username } = req.body;

    console.log({val:req.body})
    if (!name || !address || !coordinates || !coordinates.latitude || !coordinates.longitude || !password || !email || !username) {
      return res.status(400).json({
        status: false,
        message: "All fields are required.",
      });
    }

    const existingRestaurant = await Restaurant.findOne({ email });
    if (existingRestaurant) {
      return res.status(400).json({ error: "Restaurant with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newRestaurant = new Restaurant({
      name,
      address,
      coordinates,
      description,
      password: hashedPassword,
      email,
      username,
    });
    
    await newRestaurant.save();
    const token = jwt.sign({ restaurantID: newRestaurant._id }, secretKey, { expiresIn: "1h" });
    res.header('Authorization', `Bearer ${token}`);
    res.header('X-Token-Expires-In', '3600');
    return res.json({
      status: true,
      message: "Restaurant registration successful.",
      token: token,
    });
  } catch (error) {
    console.error("Error registering restaurant:", error);
    res.status(500).json({ error: "An error occurred while registering the restaurant." });
  }
};

// Log in a restaurant
export const restaurantLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingRestaurant = await Restaurant.findOne({ email });
    
    if (!existingRestaurant) {
      return res.json({
        status: false,
        message: "Invalid email.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, existingRestaurant.password);
    
    if (!passwordMatch) {
      return res.json({
        status: false,
        message: "Invalid  password.",
      });
    }

    // If the restaurant exists and the password matches, generate and return a token
    const token = jwt.sign({ restaurantID: existingRestaurant._id }, secretKey, { expiresIn: "1h" });
    res.header('Authorization', `Bearer ${token}`);
    res.header('X-Token-Expires-In', '3600');
    return res.json({
      status: true,
      message: "Login successful.",
      token: token,
    });
  } catch (error) {
    console.error("Error in restaurant login:", error);
    res.status(500).json({ error: "An error occurred in restaurant login." });
  }
};

// Update restaurant details
export const updateRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const restaurantDataToUpdate = req.body;

    // Validate if restaurantId is provided
    if (!restaurantId) {
      return res.status(400).json({ error: "Restaurant ID is required." });
    }

    // Update restaurant data
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, restaurantDataToUpdate, { new: true });
    if (!updatedRestaurant) {
      return res.status(404).json({ error: "Restaurant not found." });
    }
    
    res.json({ success: true, restaurant: updatedRestaurant });
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).json({ error: "An error occurred while updating the restaurant." });
  }
};

// Get a restaurant by ID
export const getRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    // Validate if restaurantId is provided
    if (!restaurantId) {
      return res.status(400).json({ error: "Restaurant ID is required." });
    }

    // Find restaurant by ID
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found." });
    }
    
    res.json({ success: true, restaurant });
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    res.status(500).json({ error: "An error occurred while fetching the restaurant." });
  }
};

// Delete a restaurant
export const deleteRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    if (!restaurantId) {
      return res.status(400).json({ error: "Restaurant ID is required." });
    }

    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    if (!deletedRestaurant) {
      return res.status(404).json({ error: "Restaurant not found." });
    }

    res.json({ success: true, message: "Restaurant deleted successfully." });
  } catch (error) {
    console.error("Error deleting restaurant:", error);
    res.status(500).json({ error: "An error occurred while deleting the restaurant." });
  }
};

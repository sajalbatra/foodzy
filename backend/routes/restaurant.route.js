import { 
    restaurantSignup, 
    restaurantLogin, 
    getRestaurant, 
    updateRestaurant, 
    deleteRestaurant 
  } from "../controllers/restaurant.controller.js";
  
  import { Router } from "express";
  import authenticateRestaurant from "../middlewares/restaurantAuth.middleware.js";

  const router = Router();
  
  
  router.post("/signup", restaurantSignup);
  router.post("/login", restaurantLogin);
  
  
  router.get("/:restaurantId", authenticateRestaurant, getRestaurant);
  router.patch("/:restaurantId", authenticateRestaurant, updateRestaurant); 
  router.delete("/:restaurantId", authenticateRestaurant, deleteRestaurant); 
  
  export default router;
  
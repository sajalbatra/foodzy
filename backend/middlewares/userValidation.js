import { z } from "zod";

export const userValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  userName: z.string().min(1, "Username is required").toLowerCase(),
  phoneNumber: z.string().length(10, "Phone number must be exactly 10 digits"),
  email: z.string().email("Invalid email format"),
  role: z.enum(["user", "admin", "moderator"]).optional(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const validateUser = (req, res, next) => {
  try {
    userValidationSchema.parse(req.body);
    next(); // Proceed to the next middleware or controller
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

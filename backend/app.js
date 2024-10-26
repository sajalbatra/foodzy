import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import restaurantRouter from "./routes/restaurant.route.js"

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors({
  origin: "*"
}));

app.use("/api/v1/user",userRouter)
app.use("/api/v1/restaurant",restaurantRouter)





export {app}


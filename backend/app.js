import express from "express"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import restaurantRouter from "./routes/restaurant.route.js"

const app=express()
app.use(express.json());
app.use(cors({
  origin: "*"
}));
app.use("/api/v1/user",userRouter)
app.use("/api/v1/restaurant",restaurantRouter)




export {app}

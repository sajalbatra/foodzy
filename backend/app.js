import express from "express"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import restaurantRouter from "./routes/restaurant.route.js"

const app=express()
app.use(express.json());
const corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions));

app.use("/api/v1/user",userRouter)
app.use("/api/v1/restaurant",restaurantRouter)




export {app}
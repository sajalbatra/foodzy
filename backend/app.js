import express from "express"
import cors from "cors"
import userRouter from "./routes/user.route.js"

const app=express()
app.use(express.json());
app.use(cors());

app.use("/api/v1/user",userRouter)







export {app}
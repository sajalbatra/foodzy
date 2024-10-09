import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

app.use("/api/v1/user", userRouter);

export { app };

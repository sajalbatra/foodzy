import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const db = () => {
    const mongoURL = process.env.MONGO_URI;
    return mongoose.connect(mongoURL)
        .then(() => {
            console.log("MongoDB is connected");
        })
        .catch(error => {
            console.error("Error in connecting to MongoDB database: " + error);
            throw error; 
        });
}

export default db;

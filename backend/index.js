import db from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
const PORT = process.env.PORT || 8000;
import cors from "cors"
app.use(cors())
app.get("/",(req,res)=>{
  res.send("Server is running ")
})
db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error in Starting Server: " + error);
  });

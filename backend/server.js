import express from "express"
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/health", async(req, res) =>{
  res.status(200).json({"success": true, "message": "david ganteng"});
})

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
  connectDB();
})

/*

*/ 

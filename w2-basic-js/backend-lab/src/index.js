import express from "express";
import dotenv from "dotenv/config.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/",(re,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
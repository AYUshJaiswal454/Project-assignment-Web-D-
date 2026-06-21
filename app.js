const express = require("express");

const app = express();

const connectDB = require("./config/db");

connectDB();

app.use(express.urlencoded({ extended:true}));

app.set("view engine","ejs");

app.use(express.static("public"));

const courseRoutes =require("./routes/courseRoutes");

app.use("/",courseRoutes);

app.listen(3000,()=>{
    console.log("Server Running on Port 3000");
});

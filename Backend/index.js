const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection
const DB_URL= 'mongodb+srv://chamal123:chamal123@user.8p0sd.mongodb.net/?retryWrites=true&w=majority&appName=user'
mongoose.set('strictQuery', true);
mongoose.connect(DB_URL)
.then(()=>{
  console.log("DB connected")
})
.catch((err) =>console.log("DB not connected",err));

    // Set the port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
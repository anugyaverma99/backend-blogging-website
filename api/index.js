require("dotenv").config();
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const connectDB = require("../config/dbConnect");
const corsOptions = require('../config/corsOptions');

const app = express();
const PORT = 3001;

// Connect to the database
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON

// Routes
app.use("/api/users", require("../routes/userRoutes")); // Ensure correct route file path
app.use("/api/articles", require("../routes/articleRoutes"));
app.use("/api/tags", require("../routes/tagRoutes"));
app.use("/api/comments", require("../routes/commentRoutes")); // Corrected route

// Start the server
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log('Error while connecting to MongoDB: ', err);
});

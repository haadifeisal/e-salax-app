import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

import express from 'express';
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import dbConfig from './config/database.config.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Database connected successfully."); // Log successful database connection
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
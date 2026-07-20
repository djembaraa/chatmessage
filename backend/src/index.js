import express from "express";
import "dotenv/config";
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT

// test route to check if the server is running restfully
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "Server is running smoothly" });
});

app.listen(PORT, () => {
    connectDB(); // Call the connectDB function to establish a connection to the database
    console.log(`Server is up and running on port ${PORT}`)
});
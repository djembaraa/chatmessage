import express from "express";
import "dotenv/config";
import cors from "cors";

import fs from "fs";
import path from "path";

import { clerkMiddleware } from "@clerk/express";

import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL;

const publicDir = path.join(process.cwd(), "dist");

app.use(express.json());
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
}));
app.use(clerkMiddleware( ))

// test route to check if the server is running restfully
app.get("/health", (req, res) => {

    res.status(200).json({ status: "OK", message: "Server is running smoothly" });
});

if(fs.existsSync(publicDir)) {
    app.use(express.static(publicDir));

    app.get("*", (req, res) => {
        res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
    });
}

app.listen(PORT, () => {
    connectDB(); // Call the connectDB function to establish a connection to the database
    console.log(`Server is up and running on port ${PORT}`)
});
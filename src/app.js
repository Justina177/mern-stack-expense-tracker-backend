const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/userRoute");

const app = express();

// dbConnect
dbConnect();

// middlewares
app.use(express.json())

// routes
app.use("/", userRoute)

module.exports = app;
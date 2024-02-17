const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/userRoute");
const { errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

// dbConnect
dbConnect();

// middlewares
app.use(express.json())

// routes
app.use("/", userRoute)

// Error
app.use(errorHandler);

module.exports = app;
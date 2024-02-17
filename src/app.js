const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersCtrl");


const app = express();
;

// dbConnect
dbConnect();

// routes
app.post('/register', registerUser)

module.exports = app;
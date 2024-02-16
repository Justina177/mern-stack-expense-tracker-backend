const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect")


const app = express();
;

// dbConnect
dbConnect();

module.exports = app;
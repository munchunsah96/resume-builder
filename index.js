require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || "8000";
mongoose.connect(process.env.DB_URL).then().catch();

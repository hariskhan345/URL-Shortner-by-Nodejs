const express = require("express");
const ConectMongoDb= require("./connections")

const app = express();
const PORT = 9000;

ConectMongoDb("mongodb://127.0.0.1:27017/ShortURL");

app.listen(PORT, () => console.log("Server Started....."));

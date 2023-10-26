const express = require("express");
const cors = require("cors");
const authRouter = require("../routes/authRoutes")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = {
    app
}
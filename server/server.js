const config = require("./config/config.json");
const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.route")

const port = config.port;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


const { requestLogger } = require("./middleware/logger");

const express = require("express");
const cors = require("cors");

const config = require("./config/config.json");
const authRouter = require("./routes/auth.route");
const spotifyRouter = require("./routes/spotify.route");

const port = config.port;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use(authRouter);
app.use(spotifyRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


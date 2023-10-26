const app = require("./middleware/middleware")
const config = require("./config/config.json");

const port = config.port;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


const express = require("express");
const config = require("./config.json");
const authModule = require("./src/auth/auth");

const app = express();
const port = config.port;
const clientID = config.clientID;
const clientSecret = config.clientSecret;
const redirectURI = config.redirectURI;
const lengthRandomString = config.randomStringLength;
const state = authModule.generateRandomString(lengthRandomString);
let token = undefined;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get("/login", (req, res) => {
    if (!clientID || !clientSecret || !redirectURI) {
        return res.status(500).send("Error: Client ID cannot be found");
    }

    const params = new URLSearchParams();
    params.append("client_id", clientID);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("scope", "user-read-private user-read-email");
    params.append("state", state);

    res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
});

app.get("/callback", async (req, res) => {
    const code = req.query.code;
    const state = req.query.state;

    if (!code || !state) {
        //Handle Failure
    } else {
        const params = new URLSearchParams();
        params.append("client_id", clientID);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", redirectURI);
        params.append("state", state);
        token = await authModule.getToken(params, clientID, clientSecret);
        console.log(token);
        res.redirect("/");
    }
});

app.get("/profile", (req, res) => {

});

app.get("/refresh_token", async (req, res) => {
    const refreshToken = token?.refresh_token;
    const params = new URLSearchParams();
    params.append("client_id", clientID);
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);
    let temp_token = await authModule.getToken(params, clientID, clientSecret);
    console.log(temp_token);
});
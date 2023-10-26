const { generateRandomString } = require("../../utilities/randomStringGenerator/randomStringGenerator");

const config = require("../../config/config.json");
const lengthRandomString = config.randomStringLength;
const state = generateRandomString(lengthRandomString);
let token = undefined;

function loginController (req, res) {
    if (!config.clientID || !config.clientSecret || !config.redirectURI) {
        return res.status(500).send("Error: Client ID cannot be found");
    }

    const params = new URLSearchParams();
    params.append("client_id", config.clientID);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("scope", "user-read-private user-read-email");
    params.append("state", state);

    res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
}

async function callbackController (req, res) {
    const code = req.query.code;
    const state = req.query.state;

    if (!code || !state) {
        //Handle Failure
    } else {
        const params = new URLSearchParams();
        params.append("client_id", config.clientID);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", config.redirectURI);
        params.append("state", state);
        token = await getToken(params, config.clientID, config.clientSecret);
        console.log(token);
        res.redirect("/");
    }
}

async function refreshTokenController(req, res) { 
    const refreshToken = token?.refresh_token;
    const params = new URLSearchParams();
    params.append("client_id", config.clientID);
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);
    token = await getToken(params, config.clientID, config.clientSecret);
}

function getToken(params, clientId, clientSecret) {
    const result = fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + (new Buffer.from(clientId + ":" + clientSecret).toString("base64")) 
        },
        body: params
    })
    .then((response) => response.json())
    return result;
}

module.exports = {
    loginController,
    callbackController,
    refreshTokenController,
    token
}
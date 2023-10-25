function generateRandomString (length) {
    let text = "";
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
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
    getToken,
    generateRandomString
}
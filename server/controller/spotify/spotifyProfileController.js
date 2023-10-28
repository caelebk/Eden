async function fetchProfile(req, res) {
    const accessToken = process.env.spotifyAccessToken;
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
    });

    const profile =  await result.json();
    res.json(profile);
}

async function fetchPlaylists(req, res) {
    const accessToken = process.env.spotifyAccessToken;
    const result = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
    });

    const playlists = await result.json();
    console.log(playlists);
    res.json(playlists);
}

module.exports = {
    fetchProfile,
    fetchPlaylists
}
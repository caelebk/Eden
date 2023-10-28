const { fetchProfile, fetchPlaylists } = require("../controller/spotify/spotifyProfileController");
const express = require("express");

const router = express.Router();

router.get("/spotify/profile", fetchProfile);

router.get("/spotify/playlists", fetchPlaylists);

module.exports = router;
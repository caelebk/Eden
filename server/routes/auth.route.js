const authModule = require("../controller/auth/authController");
const express = require("express");

const router = express.Router();

router.get("/login", authModule.loginController);

router.get("/callback", authModule.callbackController);

router.get("/refresh_token", authModule.refreshTokenController);

module.exports = router;
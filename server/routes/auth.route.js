const authModule = require("../controller/auth/authController");
const express = require("express");

const router = express.Router();

router.get("/auth/login", authModule.loginController);

router.get("/auth/logout", authModule.logoutController);

router.get("/auth/callback", authModule.callbackController);

router.get("/auth/refresh_token", authModule.refreshTokenController);

module.exports = router;
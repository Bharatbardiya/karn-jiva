const express = require("express");

const router = express.Router();

const {
    loginUser,
    registerUser,
    getUserProfile,
    logoutUser,
    UserCount,
    forgetPassword,
    resetPassword
} = require("../controllers/authController");
const {isAuthenticatedUser} = require("../middlewares/auth.js");


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").post(isAuthenticatedUser , getUserProfile);
router.route("/logout").get(logoutUser);
router.route("/count-user").get( UserCount);
router.route("/password/forgot").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword);
module.exports = router;
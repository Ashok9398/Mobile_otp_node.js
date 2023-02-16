const express = require("express");
const router = express.Router();


const checkAuth = require("../middlewares/checkAuth");
const {
  fetchCurrentUser,
  loginUser,
  registerUser,
  verifyOTP
} = require("../controllers/auth.controller");


router.post("/register", registerUser);

router.post("/login_with_phone", loginUser);


router.post("/verify", verifyOTP);

router.get("/me", checkAuth, fetchCurrentUser);


module.exports = router;

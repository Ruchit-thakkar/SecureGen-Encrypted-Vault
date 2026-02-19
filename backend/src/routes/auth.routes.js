const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const passport = require("passport");
const jwt = require("jsonwebtoken");
// Import your middleware at the top if it isn't already there
const authMiddleware = require("../Middlewares/auth.middleware");

// Add this line with your other routes
router.get("/me", authMiddleware, authController.getMe);
// Your existing routes
router.post("/register", authController.registerController);
router.post("/login", authController.loginController);
router.post("/logout", authController.logoutController);

// ==========================================
// 🚀 GOOGLE AUTH ROUTES
// ==========================================

// 1. React triggers this route to open the Google Login Screen
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

// 2. Google redirects here after successful login
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    // Generate JWT token
    const token = jwt.sign(
      {
        userId: req.user._id,
        role: req.user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    // Set HTTP-Only Cookie (Exactly like your loginController)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Must be false for localhost
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 🚨 REDIRECT TO REACT DASHBOARD (Do not use res.json here!)
    res.redirect("http://localhost:5173/");
  },
);

module.exports = router;

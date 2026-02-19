require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcrypt");

const connectTodb = require("./db/db");
const userModel = require("./models/user.model"); // Ensure path is correct
const authRoutes = require("./routes/auth.routes");
const vaultRoutes = require("./routes/vault.routes");
const path = require("path");
connectTodb();

app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://securegen-encrypted-vault.onrender.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

// ==========================================
// 🚀 PASSPORT GOOGLE STRATEGY SETUP
// ==========================================
app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback", // Note the /api/auth prefix!
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // 1. Check if user already exists
        let user = await userModel.findOne({ email: profile.emails[0].value });

        if (!user) {
          // 2. Create new user if they don't exist
          // Generate a random password to satisfy your schema's required field
          const randomPassword = Math.random().toString(36).slice(-10) + "A1!";
          const hashedPassword = await bcrypt.hash(randomPassword, 10);

          user = await userModel.create({
            fullName: {
              firstName: profile.name.givenName,
              lastName: profile.name.familyName || " ", // Fallback if no last name
            },
            email: profile.emails[0].value,
            password: hashedPassword,
            profileCompleted: true,
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);
// ==========================================

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/vault", vaultRoutes);
app.get("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = app;

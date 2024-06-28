// controllers/loginController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Login User
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Log request payload
    console.log("Received login request:", { username, password });

    // Check if user exists
    let user = await User.findOne({ where: { username } });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Generate token
    const payload = { user: { id_user: user.id_user, role: user.role } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login successful, returning token");
    res.json({ token });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).send("Server error");
  }
};

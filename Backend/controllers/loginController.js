const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Login User
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    // const payload = { user: { user_id: user.user_id, role: user.role } };
    // const token = jwt.sign(payload, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

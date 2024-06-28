const express = require("express");
const { sequelize } = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/login", require("./routes/loginRoutes"));

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

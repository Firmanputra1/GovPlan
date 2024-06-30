const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { sequelize } = require("./config/db");
const loginRoutes = require("./routes/loginRoutes");
const agendaRoutes = require("./routes/agendaRoutes"); // Sesuaikan path jika diperlukan

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // untuk mengizinkan parsing JSON dari body request
app.use(cors()); // untuk mengizinkan CORS
app.use(bodyParser.json());

// Routes
app.use("/api", loginRoutes); // menggunakan loginRoutes di /api
app.use("/api/agendas", agendaRoutes); // Prefix '/api/agendas' untuk semua rute agenda

// Database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Error connecting to database:", err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const router = express.Router();
const agendaController = require("../controllers/agendaController");

// Membuat agenda baru
router.post("/post", agendaController.createAgenda);

// Mendapatkan semua agenda
router.get("/get", agendaController.getAllAgendas);

// Mendapatkan satu agenda berdasarkan id_agenda
router.get("/:id_agenda", agendaController.getAgendaById);

// Memperbarui agenda berdasarkan id_agenda
router.put("/:id_agenda", agendaController.updateAgenda);

// Menghapus agenda berdasarkan id_agenda
router.delete("/:id_agenda", agendaController.deleteAgenda);

module.exports = router;

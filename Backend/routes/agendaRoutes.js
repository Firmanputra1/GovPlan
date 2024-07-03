const express = require("express");
const router = express.Router();
const agendaController = require("../controllers/agendaController");

// Create new agenda
router.post("/", agendaController.createAgenda);

// Get all agendas
router.get("/", agendaController.getAllAgendas);

// Get agenda by id
router.get("/:id_agenda", agendaController.getAgendaById);

// Update agenda by id
router.put("/:id_agenda", agendaController.updateAgenda);

// Delete agenda by id
router.delete("/:id_agenda", agendaController.deleteAgenda);

module.exports = router;

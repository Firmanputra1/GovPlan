const { Agenda } = require("../models/Agenda");
const { User } = require("../models/User");

// Membuat agenda baru
exports.createAgenda = async (req, res) => {
  try {
    const {
      nama_agenda,
      tanggal_agenda,
      waktu_agenda,
      deskripsi_agenda,
      // id_user,
    } = req.body;
    const newAgenda = await Agenda.create({
      nama_agenda,
      tanggal_agenda,
      waktu_agenda,
      deskripsi_agenda,
      // id_user,
    });
    res.status(201).json(newAgenda);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan semua agenda
exports.getAllAgendas = async (req, res) => {
  try {
    const agendas = await Agenda.findAll({
      include: User,
    });
    res.status(200).json(agendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mendapatkan satu agenda berdasarkan id_agenda
exports.getAgendaById = async (req, res) => {
  try {
    const { id_agenda } = req.params;
    const agenda = await Agenda.findByPk(id_agenda, {
      include: User,
    });
    if (agenda) {
      res.status(200).json(agenda);
    } else {
      res.status(404).json({ error: "Agenda tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Memperbarui agenda berdasarkan id_agenda
exports.updateAgenda = async (req, res) => {
  try {
    const { id_agenda } = req.params;
    const {
      nama_agenda,
      tanggal_agenda,
      waktu_agenda,
      deskripsi_agenda,
      id_user,
    } = req.body;
    const agenda = await Agenda.findByPk(id_agenda);
    if (agenda) {
      agenda.nama_agenda = nama_agenda || agenda.nama_agenda;
      agenda.tanggal_agenda = tanggal_agenda || agenda.tanggal_agenda;
      agenda.waktu_agenda = waktu_agenda || agenda.waktu_agenda;
      agenda.deskripsi_agenda = deskripsi_agenda || agenda.deskripsi_agenda;
      agenda.id_user = id_user || agenda.id_user;
      await agenda.save();
      res.status(200).json(agenda);
    } else {
      res.status(404).json({ error: "Agenda tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Menghapus agenda berdasarkan id_agenda
exports.deleteAgenda = async (req, res) => {
  try {
    const { id_agenda } = req.params;
    const agenda = await Agenda.findByPk(id_agenda);
    if (agenda) {
      await agenda.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Agenda tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./User");

const Agenda = sequelize.define(
  "Agenda",
  {
    id_agenda: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_agenda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_agenda: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    waktu_agenda: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    deskripsi_agenda: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id_user",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "tbl_agenda",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

Agenda.belongsTo(User, {
  foreignKey: "id_user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Agenda;

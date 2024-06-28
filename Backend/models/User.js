const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bidang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("staf", "admin"),
      defaultValue: "staf",
    },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    // },
  },
  {
    tableName: "tbl_user",
    timestamps: false,
    // createdAt: "createdAt",
    // updatedAt: "updatedAt",
  }
);

module.exports = User;

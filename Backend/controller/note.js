const { DataTypes, where } = require("sequelize");
const { Notes, User } = require("../helper/relation");
const jwt = require("jsonwebtoken");

module.exports = {
  // membuat notes
  create: async function (req, res) {
    try {
      console.log(req.payload.ID);
      const data = await Notes.create({ isPriority: req.body.isPriority, userId: req.payload.ID, date: req.body.date, day: req.body.day, note: req.body.note });
      res.json(data);
    } catch (Error) {
      console.log(Error.message);
      res.status(422).json({ message: Error.message });
    }
  },
  update: async function (req, res) {
    const id = req.params.id;
    const data = await Notes.update(
      { note: req.body.note },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({ pesan: "Data berhasil di update" });
  },
  read: async function (req, res) {
    const data = await Notes.findAll({
      benchmark: true,
      offset: JSON.parse(req.query.page * req.query.size),
      limit: JSON.parse(req.query.size),
      // where: {
      //   userId: req.payload.ID,
      // },
    });
    res.json(data);
  },
  delete: async function (req, res) {
    const id = req.params.id;
    const data = await Notes.destroy({
      where: {
        id: id,
      },
    });
    res.json({ pesan: "Data berhasil di hapus" });
  },
  detail: async function (req, res) {
    const id = req.params.id;
    const data = await Notes.findOne();
    res.json(data);
  },
  relation: async function (req, res) {
    const data = await User.findOne({
      where: {
        id: req.payload.ID,
      },
      include: [{ model: Notes }],
    });
    res.json(data);
  },
};

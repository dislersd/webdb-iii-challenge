const router = require("express").Router();
const knex = require("knex");
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
  try {
    const students = await db("students");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "error getting students" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await db("students").where({ id });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "error getting student" });
  }
});

router.post("/", async (req, res) => {
  try {
    await db("students").insert(req.body);
    res.status(200).json({ message: "successfully posted" });
  } catch (error) {
    res.status(500).json({ message: "error posting" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.update("students").where({ id });
    res.status(200).json({ message: "successfully updated" });
  } catch (error) {
    res.status(500).json({ message: "error updating" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const {id} = req.params;
    await db.delete("students").where({id});
    res.status(200).json({ message: 'successfully deleted' })
  } catch (error) {
    res.status(500).json({ message: 'error deleting' })
  }
});

module.exports = router;

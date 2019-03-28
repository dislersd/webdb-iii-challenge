const router = require("express").Router();
const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
  try {
    const cohorts = await db("cohorts");
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json({ message: "error getting cohorts" });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("cohorts")
    .where({ id })
    .then(cohort => {
      res.status(200).json(cohort);
    })
    .catch(err => {
      res.status(500).json({ message: "error retrieving cohort" });
    });
});

router.post("/", (req, res) => {
  db("cohorts")
    .insert(req.body)
    .then(function(post) {
      res.status(201).json({ message: "successfully posted" });
    })
    .catch(function(err) {
      res.status(500).json({ message: "error posting" });
    });
});

module.exports = router;

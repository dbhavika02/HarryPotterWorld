const { addSpells, allSpells, getSpellById } = require("../controllers/spells");

const express = require("express");
const router = express.Router();
//localhost:3000/api.harrypotterworld.com/spells
router.post("/", addSpells);
router.get("/", allSpells);
router.get("/:id", getSpellById);
module.exports = router;

const {
  addCharacters,
  allCharacters,
  getCharacterById,
} = require("../controllers/characters");
const express = require("express");
const router = express.Router();

//localhost:3000/api.harrypotterworld.com/characters
router.post("/", addCharacters);
router.get("/", allCharacters);
router.get("/:id", getCharacterById);

module.exports = router;

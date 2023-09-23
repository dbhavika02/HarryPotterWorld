const mongoose = require("mongoose");

const spellsSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  effect: {
    type: String,
    require: true,
  },
  incantation: {
    type: String,
    require: true,
  },
});

const spellsModel = mongoose.model("spells", spellsSchema);

module.exports = spellsModel;

// {
//     "id": 1,
//     "name": "Lumos",
//     "type": "Charm",
//     "effect": "Produces light from the caster's wand",
//     "incantation": "Lumos"
//     }

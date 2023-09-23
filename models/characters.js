const mongoose = require("mongoose");

const charactersSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  house: {
    type: String,
    require: true,
  },
  wand: {
    type: String,
    require: true,
  },
  patronus: {
    type: String,
    require: true,
  },
  image_url: {
    type: String,
    require: true,
  },
});

const charactersModel = mongoose.model("characters", charactersSchema);

module.exports = charactersModel;

// {
//     "id": 1,
//     "name": "Harry Potter",
//     "house": "Gryffindor",
//     "wand": "11\\" Holly, Phoenix feather core",
//     "patronus": "Stag",
//     "image_url": "<https://example.com/harry-potter.jpg>"
//     },

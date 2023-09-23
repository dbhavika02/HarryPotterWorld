const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  founder: {
    type: String,
    require: true,
  },
  head_of_house: {
    type: String,
    require: true,
  },
  house_ghost: {
    type: String,
    require: true,
  },
  values: {
    type: Array,
    require: true,
  },
  common_room: {
    type: String,
    require: true,
  },
  mascot: {
    type: String,
    require: true,
  },
});

const houseModel = mongoose.model("houses", houseSchema);

module.exports = houseModel;

// {
//     "name": "Gryffindor",
//     "founder": "Godric Gryffindor",
//     "head_of_house": "Professor Minerva McGonagall",
//     "house_ghost": "Nearly Headless Nick",
//     "values": [
//     "Courage",
//     "Bravery",
//     "Nerve",
//     "Chivalry"
//     ],
//     "common_room": "Gryffindor Tower",
//     "mascot": "Lion"
//     },

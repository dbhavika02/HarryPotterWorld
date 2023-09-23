const {
  addHouse,
  allHouses,
  getHousesByName,
} = require("../controllers/houses");

const express = require("express");
const router = express.Router();

//localhost:3000/api.harrypotterworld.com/houses
router.post("/", addHouse);
router.get("/", allHouses);
router.get("/:name", getHousesByName);

module.exports = router;

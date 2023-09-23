const houseModel = require("../models/houses");

exports.addHouse = async (req, res) => {
  try {
    const {
      name,
      founder,
      head_of_house,
      house_ghost,
      values,
      common_room,
      mascot,
    } = req.body;

    if (
      !name ||
      !founder ||
      !head_of_house ||
      !house_ghost ||
      !values ||
      !common_room ||
      !mascot
    ) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }
    const newHouse = new houseModel({
      name: name,
      founder: founder,
      head_of_house: head_of_house,
      house_ghost: house_ghost,
      values: values,
      common_room: common_room,
      mascot: mascot,
    });

    const savedHouse = await newHouse.save();

    return res.status(200).json({
      message: "house added successfully",
      Houses: savedHouse,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
exports.allHouses = async (req, res) => {
  try {
    const Houses = await houseModel.find({});
    res.status(200).json({ Houses });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.getHousesByName = async (req, res) => {
  const { name } = req.params;
  try {
    const house = await houseModel.findOne({
      name: name,
    });
    return res.status(200).json({
      houseByName: house,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

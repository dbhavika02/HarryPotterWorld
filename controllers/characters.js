const charactersModel = require("../models/characters");

exports.addCharacters = async (req, res) => {
  try {
    const { id, name, house, wand, patronus, image_url } = req.body;

    if (!id || !name || !house || !wand || !patronus || !image_url) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }
    const newCharacter = new charactersModel({
      id: id,
      name: name,
      house: house,
      wand: wand,
      patronus: patronus,
      image_url: image_url,
    });

    const saveCharacters = await newCharacter.save();

    return res.status(200).json({
      message: "Character added successfully",
      Characters: saveCharacters,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.allCharacters = async (req, res) => {
  try {
    const characters = await charactersModel.find({});
    res.status(200).json({ characters });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getCharacterById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await charactersModel.findOne({
      id: id,
    });
    return res.status(200).json({
      character: character,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

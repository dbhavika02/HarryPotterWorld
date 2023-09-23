const spellsModel = require("../models/spells");

exports.addSpells = async (req, res) => {
  try {
    const { id, name, type, effect, incantation } = req.body;
    if (!id || !name || !type || !effect || !incantation) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }
    const newSpells = new spellsModel({
      id: id,
      name: name,
      type: type,
      effect: effect,
      incantation: incantation,
    });

    const savedSpells = await newSpells.save();

    return res.status(200).json({
      message: "Spells added successfully",
      Spells: savedSpells,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.allSpells = async (req, res) => {
  try {
    const Spells = await spellsModel.find({});
    res.status(200).json({ Spells });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

exports.getSpellById = async (req, res) => {
  const { id } = req.params;
  try {
    const spell = await spellsModel.findOne({
      id: id,
    });
    return res.status(200).json({
      SpellById: spell,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

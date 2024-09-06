const berryModel = require("../models/berriesModel");

const addBerries = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newBerries = new berryModel({
      name,
      description,
      price,
    });

    await newBerries.save();

    res.status(201).json({ message: "Berry added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listAllBerries = async (req, res) => {
  try {
    const allBerries = await berryModel.find({});

    res.status(200).json(allBerries);
  } catch (error) {}
};

const getSingleBerry = async (req, res) => {
  const id = req.params.id;
  try {
    const berry = await berryModel.findById(id);
    if (!berry) return res.status(404).json({ message: "Berries not found" });
    res.status(200).json(berry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateBerry = async (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;
  try {
    const berry = await berryModel.findById(id);
    if (!berry) res.status(404).json({ message: "Berry with id not found" });

    const updateObject = {};
    if (name) updateObject.name = name;
    if (description) updateObject.description = description;
    if (price) updateObject.price = price;

    const updatedBerry = await berryModel.findByIdAndUpdate(id, updateObject, {
      new: true,
    });

    res.status(200).json(updatedBerry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBerry = async (req, res) => {
  const id = req.params.id;

  try {
    const berry = await berryModel.findByIdAndDelete(id); //-
    if (!berry) return res.status(404).json({ message: "Berry not found" }); 
    res.status(204).json({message: "No Content"});  //-
  } catch (error) {
    //+
    res.status(500).json({ message: error.message }); //+
  }
};

module.exports = {
  addBerries,
  listAllBerries,
  getSingleBerry,
  updateBerry,
  deleteBerry,
};

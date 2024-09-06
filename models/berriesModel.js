const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const berrySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

const berryModel = mongoose.model("Berry", berrySchema);


module.exports = berryModel;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  customers: { type: String, required: true },
  requirements: { type: String },
  typeOfCustomers: { type: String, required: true },
  positionsOfProspects: { type: String, required: true },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;

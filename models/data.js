const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  customers: { type: String, minlength: 8, maxlength: 50, required: true },
  requirements: { type: String, maxlength: 50 },
  typeOfCustomers: {
    type: String,
    minlength: 8,
    maxlength: 50,
    required: true,
  },
  positionsOfProspects: {
    type: String,
    minlength: 8,
    maxlength: 50,
    required: true,
  },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;

const Data = require("../models/data");

// Controller function to retrieve data
// const getData = (req, res) => {
//   Data.find()
//     .then((data) => res.json(data))
//     .catch((err) => res.status(400).json("Error: " + err));
// };

// Controller function to add data
const addData = async (req, res) => {
  // I think that this is strange to add checking that but if it was about users it could be useful, i want to also get error from backend thanks to that
  const dataExists = await Data.find({ customers: req.body.customers });
  if (dataExists.length > 0) {
    return res.status(400).json({
      error: "Data already exists",
    });
  }
  const { customers, requirements, typeOfCustomers, positionsOfProspects } =
    req.body;

  const newData = new Data({
    customers,
    requirements,
    typeOfCustomers,
    positionsOfProspects,
  });

  newData
    .save()
    .then(() => res.json("Data added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  addData,
};

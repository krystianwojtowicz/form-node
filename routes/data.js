const router = require("express").Router();
let Data = require("../models/data");

router.route("/").get((req, res) => {
  Data.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const customers = req.body.customers;
  const requirements = req.body.requirements;
  const typeOfCustomers = req.body.typeOfCustomers;
  const positionsOfProspects = req.body.positionsOfProspects;

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
});

module.exports = router;

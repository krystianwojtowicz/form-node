const Data = require("../models/data");
const { body, validationResult } = require("express-validator");

// eslint-disable-next-line no-unused-vars
const validationRules = [
  body("customers")
    .trim()
    .notEmpty()
    .withMessage("Customers field is required")
    .isLength({ min: 8, max: 50 })
    .withMessage("Customers must be between 8 and 50 characters"),
  body("requirements")
    .trim()
    .isLength({ max: 50 })
    .withMessage("Requirements must be less than 50 characters"),
  body("typeOfCustomers")
    .trim()
    .notEmpty()
    .withMessage("Type of customers field is required")
    .isLength({ min: 8, max: 50 })
    .withMessage("Type of customers must be between 8 and 50 characters"),
  body("positionsOfProspects")
    .trim()
    .notEmpty()
    .withMessage("Positions of prospects field is required")
    .isLength({ min: 8, max: 50 })
    .withMessage("Positions of prospects must be between 8 and 50 characters"),
];

const addData = async (req, res) => {
  try {
    // It is the same as frontend
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // I think that this is strange to add checking that but if it was about users it could be useful, i want to also get error from backend thanks to that
    const dataExists = await Data.find({ customers: req.body.customers });
    if (dataExists.length > 0) {
      return res.status(409).json({
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

    await newData.save();
    res.json("Data added!");
  } catch (error) {
    res.status(400).json("Error: " + error);
  }
};

module.exports = {
  addData,
};

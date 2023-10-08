const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// eslint-disable-next-line no-undef
const mongoDB = process.env.ATLAS_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const dataRouter = require("./routes/data");

app.use("/data", dataRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

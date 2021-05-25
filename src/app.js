const dotenv = require("dotenv");
const setDateTime = require("./index.js");
// Environment Variable Processing
dotenv.config();
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
// Configuring body parser middleware
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/setDateTime", (req, res, next) => {
  if (!req.body) {
    res.status(500).send("Request Body is required for this API call.");
    return;
  }
  const dateTimeString = req.body.dateTime;

  if (!dateTimeString) {
    res.status(404).send("dateTime in body required for this API call.");
    return;
  }

  console.log("******* GOT DATE TIME ********");
  console.log(dateTimeString);

  setDateTime(dateTimeString, { useSudo: true });

  res.send("Hello World!");
  next(res);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

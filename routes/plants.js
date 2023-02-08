const express = require("express");
const plantData = require("../data/plant.json");
const router = express.Router();

router.get("/", (_req, res) => {
    res.json(plantData);
  });


  module.exports = router;

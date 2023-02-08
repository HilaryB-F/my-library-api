const express = require("express");
const decorData = require("../data/decor.json");
const router = express.Router();

router.get("/", (_req, res) => {
    res.json(decorData);
  });


  module.exports = router;

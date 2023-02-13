const express = require("express");
const router = express.Router();
const data = require("../data/plant.json")

router.get("/", (_req, res) => {
  res.json(data);
});

router.delete("/", (req, res) => {
  const plantData = JSON.parse(fs.readFileSync("./data/plant.json"));
  const updatedData = plantData.filter((plant) => plant.id !== req.body.id);
  fs.writeFileSync(
    "./data/plant.json",
    JSON.stringify(updatedData),
    (err) => {}
  );
  res.sendStatus(201);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const data = require("../data/decor.json");

router.get("/", (_req, res) => {
  res.json(data);
});

router.delete("/", (req, res) => {
  const decorData = JSON.parse(fs.readFileSync("./data/decor.json"));
  const updatedData = decorData.filter((decor) => decor.id !== req.body.id);
  fs.writeFileSync(
    "./data/decor.json",
    JSON.stringify(updatedData),
    (err) => {}
  );
  res.sendStatus(201);
});
module.exports = router;

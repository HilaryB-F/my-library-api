const express = require("express");
const fs = require("node:fs");
const router = express.Router();
const { v4 } = require("uuid");

router.get("/", (_req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/book.json"));
  res.json(data);
});
router.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/book.json"));
  const { title, author, series, rating, finished, image, order, color, room } =
    req.body;
  const books = {
    id: v4(),
    title,
    author,
    series,
    rating,
    finished,
    image,
    order,
    color,
    room,
  };
  data.push(books);
  fs.writeFileSync("./data/book.json", JSON.stringify(data), (err) => {});
  res.status(201).json(books);
});

router.get("/:id", (req, res) => {
  getBooks(req, res);
});

router.put("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/book.json"));
  const { title, author, series, rating, finished, image, order, color, room } =
    req.body;
  const books = {
    id: v4(),
    title,
    author,
    series,
    rating,
    finished,
    image,
    order,
    color,
    room,
  };
  data.push(books);
  fs.writeFileSync("./data/book.json", JSON.stringify(data), (err) => {});
  res.status(201).json(books);
});

router.delete("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/book.json"));
  const updatedData = data.filter((book) => book.id !== req.body.id);
  fs.writeFileSync(
    "./data/book.json",
    JSON.stringify(updatedData),
    (err) => {}
  );
  res.sendStatus(201);
});

async function getBooks(req, res) {
  const books = getBook();
  const book = books.find((book) => book.id === req.params.id);
  if (book) {
    try {
      res.json(book);
    } catch {
      console.log("Error");
    }
  }
}
function getBook() {
  const bookData = fs.readFileSync("data/book.json");
  return JSON.parse(bookData);
}

module.exports = router;

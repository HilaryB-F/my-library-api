const express = require("express");
const fs = require("node:fs");
const router = express.Router();
const { v4 } = require("uuid");
const data = require("../data/book.json");

router.get("/", (_req, res) => {
    res.json(data);
  });
  router.post("/", (req, res) => {
    const { title, author, series, rating, finished, image, order, color, room  } = req.body;
    const books = { id: v4(), title, author, series, rating, finished, image, order, color, room };
    data.push(books);
    fs.writeFileSync("./data/book.json", JSON.stringify(data), (err) => {
    });
    res.status(201).json(books);
  });
  
  router.get("/:id", (req, res) => {
    getBooks(req, res);
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
  
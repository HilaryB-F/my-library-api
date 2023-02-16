const express = require("express");
const cors = require("cors");
const app = express();
const books = require("./routes/books");
const plants = require("./routes/plants");
const decor = require("./routes/decor");
const PORT = process.env.PORT 

app.use(cors());
app.use(express.json());
app.use(express.static('public/images/decor'))
app.use(express.static('public/images/plants'))


app.use("/", (req, res, next) => {
  next();
});

app.use("/library", books);

app.use("/addPlants", plants);

app.use("/addDecor", decor);

app.listen(PORT, () => {
  console.log("Hello from port 8080 🚀");
});

const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve( "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/_FliqaIndia_/g, "Home Page")
      .replace(/_FliqaIndia_/g, "Home page description.");

    res.send(data)
  });
});

app.get("/about", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/_FliqaIndia__/g, "About Page")
      .replace(/_FliqaIndia_/g, "About page description.");

    res.send(data)
  });
});

app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
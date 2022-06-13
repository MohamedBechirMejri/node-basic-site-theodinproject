const fs = require("fs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const index = fs.readFileSync("./index.html");
const contact = fs.readFileSync("./contact-me.html");
const about = fs.readFileSync("./about.html");
const notFound = fs.readFileSync("./404.html");

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(index);
});
app.get("/contact-me", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(contact);
});
app.get("/about", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(about);
});
app.get("*", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(notFound);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

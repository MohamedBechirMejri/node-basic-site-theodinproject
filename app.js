const http = require("http");
const fs = require("fs");
const port = 3000;

const index = fs.readFileSync("./index.html");
const contact = fs.readFileSync("./contact-me.html");
const about = fs.readFileSync("./about.html");
const notFound = fs.readFileSync("./404.html");

http
  .createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      req.url === "/"
        ? index
        : req.url === "/contact-me"
        ? contact
        : req.url === "/about"
        ? about
        : notFound
    );
  })
  .listen(port, "localhost");

console.log(`Server running at http://localhost:${port}/`);

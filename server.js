const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = 8934;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8"
};

http.createServer((req, res) => {
  let filePath = path.join(root, decodeURIComponent(req.url.split("?")[0]));
  if (req.url === "/" || req.url === "") filePath = path.join(root, "index.html");
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found"); return; }
    const ext = path.extname(filePath);
    res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
    res.end(data);
  });
}).listen(port, () => console.log("Serving on " + port));

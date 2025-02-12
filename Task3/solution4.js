import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var result = "";

app.use(bodyParser.urlencoded({ extended: true }));

function stringaddition(req, res, next) {
  console.log(req.body);
  result = req.body["string1"] + req.body["string2"];
  next();
}

app.use(stringaddition);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your concatenated string is:</h1><h2>${result}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

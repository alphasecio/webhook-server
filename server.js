const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", function(req, res) {
  console.log(req.body);
  res.send("Welcome to the Webhook Server!");
});

app.post("/webhook-1", function(req, res) {
  console.log(req.body);
  res.send("Webhook 1 successfully received.");
});

app.post("/webhook-2", function(req, res) {
  console.log(req.body);
  res.send("Webhook 2 successfully received.");
});

app.post("/webhook-3", function(req, res) {
  console.log(req.body);
  res.send("Webhook 3 successfully received.");
});

app.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}/`);
});

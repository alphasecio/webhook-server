const express = require("express");

// Create an Express app and listen for incoming requests on port 3000
const app = express();
const PORT = 3000;

// Use middleware to parse incoming requests with JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded());

// Handle GET requests to the root URL
app.get("/", function(req, res) {
  console.log(req.body);
  res.send("Welcome to the Webhook Server!");
});

// Handle POST requests to specific URLs i.e. webhook endpoints
app.post("/webhook-1", function(req, res) {
  console.log(req.body);
  res.send("Webhook 1 successfully received.");
});

app.post("/webhook-2", function(req, res) {
  console.log(req.body);
  res.send("Webhook 2 successfully received.");
});

// Start the server and listen for incoming connections
app.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}/`);
});

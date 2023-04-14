const express = require("express");

// Create an Express app and listen for incoming requests on port 3000
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

// Use middleware to parse incoming requests with JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Handle GET requests to the root URL
router.get("/", (req, res) => {
  res.send("Welcome to the Webhook Server!");
});

// Handle POST requests to specific URLs i.e. webhook endpoints
router.post("/webhook-1", (req, res) => {
  console.log(req.body);
  res.send("Webhook 1 successfully received.");
});

router.post("/webhook-2", (req, res) => {
  console.log(req.body);
  res.send("Webhook 2 successfully received.");
});

// Mount the router middleware
app.use(router);

// Start the server and listen for incoming connections
app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});

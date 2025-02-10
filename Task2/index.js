import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Success response
app.get("/success", (req, res) => {
    res.status(200).json({ message: "Success", status: 200 });
});

// Client error response
app.get("/not-found", (req, res) => {
    res.status(404).json({ message: "Not Found", status: 404 });
});

// Server error response
app.get("/server-error", (req, res) => {
    res.status(500).json({ message: "Internal Server Error", status: 500 });
});

// Custom response for POST request
app.post("/data", (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ message: "Bad Request: Name is required", status: 400 });
    }
    res.status(201).json({ message: "Data Created", status: 201, data: req.body });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

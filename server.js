const express = require("express");
const app = express();

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("API is working successfully");
});

// Share API
app.post("/share", (req, res) => {
    res.json({
        message: "File shared successfully"
    });
});

// Move API
app.post("/move", (req, res) => {
    res.json({
        message: "File moved successfully"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// app.js
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello from CI/CD app!"));
app.listen(3000, () => console.log("App running on port 3000"));
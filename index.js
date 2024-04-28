const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    res.status(200).json({ message: "OK" });
})

app.listen(3000, () => {
    console.log("Server is started");
})
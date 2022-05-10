//jshint esversion:6
const express = require("express");
const ejs = require("ejs");

const app = express();
const PORT = process.env.PORT || 6969; // for å få localhost til å kjøre med portnr


app.get("/", (req, res) =>{
    res.render("home");
});

app.listen(PORT, () => {
    console.log("Server started on port http://localhost:6969/");
});
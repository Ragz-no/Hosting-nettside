//jshint esversion:6
const express = require("express");
const ejs = require("ejs");


app.get("/", (req, res) =>{
    res.render("home");
  });
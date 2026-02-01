import express from "express";

const app = express();

app
  .get("/", (req, res) => {
    res.send("helloww form experss.js");
  })

  .get("/about", (req, res) => {
    res.send("About us page by expressjs");
  })
  .get("/api", (req, res) => {
    res.json({
      status: "active",
      message: "your api is working",
    });
  })
  .listen(3000, () => {
    console.log("Server is running on part 3000");
  });

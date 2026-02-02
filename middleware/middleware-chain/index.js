import express from "express";
const app = express();

const logger = (req, res, next) => {
  console.log("Logger middleware.");
  next();
};

const normal = (req, res, next) => {
  console.log("normal middleware.");
  next();
};

const checkAuth = (req, res, next) => {
      console.log("Authorization middleware.");
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).send("Access denied due to unAuthorised.");
      
  }
  next();
};

app.get("/", (req, res) => {
  res.send("Welcome to the HOme page.\nnow try to access /personal route");
});
app.get("/personal", logger, normal, checkAuth, (req, res) => {
  res.send("Allowed\nyou are a authorised person.");
});
app.listen(3000, () => {
  console.log("Server is running port 3000");
});

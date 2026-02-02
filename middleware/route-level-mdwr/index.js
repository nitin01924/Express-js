import express from "express";
const app = express();

// app.get("/about", checkAuth, routehandler);

const checkAuth = (req, res, next) => {
  const isloggedin = false;
  //   const isloggedin = true;
  if (!isloggedin) {
    // return res.send("Access Denied form officials.");
    return res.status(401).send("Access denied");
  }
  next();
};
app.get("/", (req, res) => {
  res.send("Welcome to the route-level-Middleware.");
});
app.get("/about", checkAuth, (req, res) => {
  res.send("Congrates you are legal.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

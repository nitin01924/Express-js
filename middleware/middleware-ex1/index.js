import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log("middleware runs..");
  req.user = "Nitin";
  next();
});
app.get("/", (req, res) => {
  // res.send("Hello form Express.js")
  res.send(req.user);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

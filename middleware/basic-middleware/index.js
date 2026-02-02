import express from "express";

const app = express();
app.use((req, res, next) => {
  console.log("middleware runs..");
  next();
});

app.get("/", (req, res) => {
  res.send("hellow form home");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

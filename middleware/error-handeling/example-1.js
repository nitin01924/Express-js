import express from "express";
const app = express();

app.get("/error", (req, res) => {
  throw new Error("Something broke");
});

app.get("/fail", (req, res, next) => {
  const err = new Error("Manual failure");
  next(err);
});
// MIDDLEWARE
app.use((err, req, res, next) => {
  console.log("Error middleware activated");
  res.status(500).send(err.message);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

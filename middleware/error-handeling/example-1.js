import express from "express";
const app = express();
app.get("/error", (req, res) => {
  throw new Error("Something broke");
});

app.get("/fail", (req, res, next) => {
  const err = new Error("Manual failure");
  next(err);
});


// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.status(500).send("Internal Server Error");
// });

app.use((err, req, res, next) => {
  console.log("Error middleware activated");
  res.status(500).send(err.message);
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

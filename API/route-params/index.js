import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home-page.");
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`The User id is ${id}`);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

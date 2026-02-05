import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the HOME-PAGE.");
});

app.get("/users", (req, res) => {
  const products = [{ Brand: "MSI", Price: 98000 },{Brand: "Macbook M2", Price: 70000}]
  console.log(req.query)
  res.send()
});

app.listen(PORT, () => {
  console.log("Server is running on PORT : ", PORT);
});

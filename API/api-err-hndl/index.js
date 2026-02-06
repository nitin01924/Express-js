import express from "express";
const app = express();

app.use(express.json());

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to the homepage form api error handler");
});

// CREATE USER OR DATA
app.post("/users", (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      error: "data is empty, failed in creation.",
    });
  }
  res.status(201).json({
    message: "data is created",
    data: req.body,
  });
});

// PORT LISTNING
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

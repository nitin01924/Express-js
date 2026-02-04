import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

// GET REQUEST
app.get("/users", (req, res) => {
  res.status(200).json({
    users: ["A", "B", "C"],
  });
});

// POST REQUEST
app.post("/users", (req, res) => {
  res.status(201).json({
    message: "data recieved",
    data: req.body,
  });
});
// LISTNING PORT
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});

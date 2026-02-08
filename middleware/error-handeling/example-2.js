import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Home page from error handeling middleware.");
});

app.get("/error", (req, res) => {
    throw new Error("error by manual");
});
app.use((err, req, res, next) => {
  console.log("error generated:", err.message);
  res.status(500).send("Error occurs..");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the HOME-PAGE.");
});

app.get("/users", (req, res) => {
  const products = [
    { Brand: "MSI", Price: 98000 },
    { Brand: "Macbook M2", Price: 70000 },
  ];
  const item = req.query.Brand;
  //   console.log(item);
  const itemhave = products.find((p) => p.Brand == item);
  if (!itemhave) {
    return res.status(400).send({
      error: "Something Went Wrong.",
    });
  }
  {
    console.log("Item Founded!!");
    res.send("Match Founded!!");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT : ", PORT);
});

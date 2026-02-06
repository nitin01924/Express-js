import express from "express";
const app = express();

const PORT = 3000;
// HOME PAGE
app.get("/", (req, res) => {
  res.send("Hellowww form HOmePage");
});

// EXTRACTING DATA FROM ROUTE-PARAMS.
app.get("/users/:id", (req, res) => {
  const userdata = [
    { id: 11, name: "Mustafa Alam", age: 23 },
    { id: 12, name: "Naveen", age: 18 },
    { id: 13, name: "Lokesh", age: 21 },
  ];
  const id = req.params.id;
  const ide = userdata.find((i) => i.id == id);
  if (!ide) {
    return res.status(404).json({
      error: "user is not found.",
    });
  }
  {
    console.log(ide);
    res.json(ide);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

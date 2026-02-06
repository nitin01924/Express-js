import express from "express";
const app = express();

app.use(express.json());

let users = [
  { id: 11, name: "Mustafa Alam", age: 23 },
  { id: 12, name: "Naveen", age: 18 },
  { id: 13, name: "Lokesh", age: 21 },
];

app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, age } = req.body;

  // find user
  const user = users.find((u) => u.id === id);

  // if case for not found
  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  // update only provided fields
  if (name !== undefined) user.name = name;
  if (age !== undefined) user.age = age;

  // success response
  res.status(200).json({
    message: "User updated successfully",
    data: user,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// DELETE API  with /users/:id
import express from "express";
const app = express();
const PORT = 3000;

// HOMEPAGE
app.get("/", (req, res) => {
  res.send("Welcome to HOMEPAGE");
});

let users = [
  { id: 11, name: "Mustafa Alam", age: 23 },
  { id: 12, name: "Naveen", age: 18 },
  { id: 13, name: "Lokesh", age: 21 },
];

// DELETING EXISTING USER.
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((i) => i.id === id);
  const updatedUsers = users.filter((u) => u.id !== id);

  users = updatedUsers;

  if (!user) {
    return res.status(404).json({
      message: `action can't be taken because the user is not exist.`,
    });
  }
  console.log(`user delted which has id : ${id}`);
  res.status(200).json({
    message: "User Deleted!!!",
    data: user,
    leftuser: users,
  });
});

// LISTNING APP
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

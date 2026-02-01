import express from "express";

const app = express();

// MTHOD 1.
app.get("/", (req, res) => {
  res.send("hellowww from Express.js");
});
app.listen(3000, () => {
  console.log("Server is runnning on the port 3000...");
});

// METHOD 2.
// app
//   .get("/", (req, res) => {
//     res.send("helloww form experss.js");
//   })

//   .get("/about", (req, res) => {
//     res.send("About us page by expressjs");
//   })
//   .get("/api", (req, res) => {
//     res.json({
//       status: "active",
//       message: "your api is working",
//     });
//   })
//   .listen(3000, () => {
//     console.log("Server is running on part 3000");
//   });

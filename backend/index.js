const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/index");
const User = require("./model/User");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
app.get("/", (req, res) => {
  res.json({
    message: "kire heda ki khbor tobor",
  });
});
app.post("/register", async (req, res) => {
  console.log("the req", req);

  console.log("the req body", req.body);

  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      phoneNumber: req.body.phone,
      RegistrationNumber: req.body.registration,
      event: req.body.event,
      techtalk: req.body.techtalk,
    });
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
});
app.listen(port, async () => {
  await dbConnect();
  console.table("the server has started to listen on port 3000");
});

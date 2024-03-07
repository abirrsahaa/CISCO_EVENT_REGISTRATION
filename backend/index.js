const { capturePayment } = require("./controllers/Payments");

const { verifyPayment } = require("./controllers/Payments");

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable cookies, authorization headers, etc.
  optionsSuccessStatus: 204, // Respond with a 204 status code for preflight requests
};

const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/index");
const User = require("./model/User");
const app = express();
app.use(cors(corsOptions));

app.use(express.json());
const dotenv = require("dotenv");

dotenv.config();

app.use(express.static("public"));
app.get("/*", (req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");
  res.sendFile(filePath);
});
const port = 3000;

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

app.post("/capturePayment", capturePayment);
app.post("/verifyPayment", verifyPayment);
app.listen(port, async () => {
  await dbConnect();
  console.table(`the server has started to listen on port ${port}`);
});

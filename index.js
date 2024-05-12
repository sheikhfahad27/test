const express = require("express");
const app = express();
const bdconnect = require("./dbconects/Connect");
const user = require("./schema/userdata");
const cors = require("cors");
const login = require("./schema/login");
const port =3000
require("dotenv").config();
app.use(express.json());
app.use(cors());
bdconnect();
app.get("", (req, res) => {
  res.json("server is started");
});


app.post("/details", async (req, res) => {
  try {
    const { tabButton, image, title, desc } = req.body;

    const userdata = new user({
      tabButton,
      image,
      title,
      desc,
    });
    await userdata.save();

    res.json();
  } catch (error) {
    res.json();
  }
});

app.get("/getdata", async (req, res) => {
  try {
    const data = await user.find(); // Fetch data from the database
    res.status(200).json(data); // Send the data back in the response
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Send an error response if there's an error
  }
});

app.post("/emailpost", async (req, res) => {
  try {
    const { email } = req.body;

    const useremail = new login({
      email,
    });
    await useremail.save();
    res.json(email);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const newUser = new login({
    email,
    password,
  });

  await newUser.save();
  console.log(newUser);

  res.json(newUser);
});

app.listen(port, () => {
  console.log("server is started");
});

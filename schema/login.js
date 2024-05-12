const mongoose = require("mongoose");

const massagedata = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const login = mongoose.model("massage", massagedata);
module.exports = login;

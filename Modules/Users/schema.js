const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  dob: {
    type: Date,
  },
  joinedon: {
    type: Date,
  },
  leftOn: {
    type: Date,
  },
  salary: {
    type: String,
  },
  profile: {
    type: String,
  },
  fathersName: {
    type: String,
  },
  isoline: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  role: {
    type: String,
  },
  hoursFrom: {
    type: String,
  },
  hoursTo: {
    type: String,
  },
});

const users = mongoose.model("usersInfo", userSchema);

module.exports = users;

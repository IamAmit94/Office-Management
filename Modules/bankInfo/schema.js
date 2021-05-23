const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
  },
  ifsc: {
    type: String,
  },
  recieptNumber: {
    type: String,
  },
  isPrimary: {
    type: Boolean,
  },
});

const bank = mongoose.model("bankinfos", bankSchema);

module.exports = bank;
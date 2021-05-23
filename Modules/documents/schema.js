const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  documentType: {
    type: String,
  },
  number: {
    type: String,
  },
  validFrom: {
    type: Date,
  },
  validTill: {
    type: Date,
  },
  frontImg: {
    type: String,
  },
  backImg: {
    type: String,
  }
}, {timestamp: true});

const document = mongoose.model("Documents", documentSchema);

module.exports = document;

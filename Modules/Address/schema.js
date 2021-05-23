const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  locationType: {
    type: String,
  },
  buildingNo: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  streetAddress2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },
  isPrimary: {
    type: Boolean,
  },
});
const address = mongoose.model("Address", addressSchema);

module.exports = address;

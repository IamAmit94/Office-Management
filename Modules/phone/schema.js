const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema({

      countryCode: {
          type: String
      },
      phone: {
        type: String
      },
      isPrimary: {
        type: Boolean
      },
      isEmergency: {
        type: Boolean
      },
      contactName: {
        type: String
      },
      relation: {
        type: String
      },
})

const phone = mongoose.model('Phone', phoneSchema)

module.exports = phone;

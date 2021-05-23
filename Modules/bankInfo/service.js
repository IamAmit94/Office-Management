const bankModel = require("./schema");

module.exports.addNewBankInfo = (payload, callback) => {
  try {
    bankModel(payload)
      .save()
      .then((bankData) => {
        callback(null, bankData);
      })
      .catch((err) => {
        callback(err);
      });
  } catch (error) {
    callback(error);
  }
};

// READ
module.exports.readNewBankInfo = (callback) => {
  try {
    bankModel.find({}).then((data) => {
        return callback(null, data);
      }).catch((err) => {
        return callback(err, data);
      });
  } catch (error) {
    return callback(error);
  }
};

//UPDATE

module.exports.updateNewBankInfo =  (payload, body, callback) => {
  try {
   
    const id = payload.id;
     bankModel.findByIdAndUpdate({ _id: id }, { $set: body }).then((data) => {
        return callback(null, data);
      }).catch((err)=>{
          return callback(err)
      });
  } catch (error) {
    callback(error);    
  }
};

//DELETE

module.exports.deleteNewBankInfo =  (payload, callback) => {
  try {
    const id = payload.id;
    bankModel.findOneAndDelete({_id:id}).then((data) => {
        return callback(null, data);
    }).catch((err) => {
        return callback(err)
    })
  } catch (error) {
    callback(error);
  }
};

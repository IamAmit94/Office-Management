const {
  addNewBankInfo,
  readNewBankInfo,
  updateNewBankInfo,
  deleteNewBankInfo,
} = require("../bankInfo/service");

// CREATE BankInfo
module.exports.addBankInfo = (req, res) => {
  addNewBankInfo(req.body, (error, response) => {
    if (error)
      return res
        .status(400)
        .send({ msg: "Something went wrong !", err: error });
    res.status(200).send({
      msg: "Data inserted Successfully",
      data: response,
    });
  });
};

// READ Bank INfo

module.exports.readBankInfo = (req, res) => {
  readNewBankInfo((error, response) => {
    // console.log(error);
    if (error)
      return res.status(400).send({ msg:" Something went wrong ", err: error });
        res.status(200).send({
            msg:" The data from the file ",
            data: response
    });
  });
};

// UPDATE bank INfo

module.exports.updateBankInfo = (req, res) => {
  updateNewBankInfo(req.params, req.body, (error, response) => {
    if (error)
      return res
        .status(400)
        .send({ msg: "Something went wrong !", err: error });
    res.status(200).send({
      msg: "Data updated Successfully",
      data: response,
    });
  });
};

// DELETE bank info

module.exports.deleteBankInfo = (req, res) => {
  deleteNewBankInfo(req.params, (error, response) => {
    if (error)
      return res
        .status(400)
        .send({ msg: "Something went wrong !", err: error });
    res.status(200).send({
      msg: "Data removed Successfully",
      data: response,
    });
  });
};

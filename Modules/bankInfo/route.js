const router = require("express").Router();

const { addBankInfo, readBankInfo, updateBankInfo, deleteBankInfo } = require("../bankInfo/controller");

router.post("/bankinfo", addBankInfo);
router.get('/bankinfo', readBankInfo);
router.put('/bankinfo/:id', updateBankInfo);
router.delete('/bankinfo/:id', deleteBankInfo);
module.exports = router;

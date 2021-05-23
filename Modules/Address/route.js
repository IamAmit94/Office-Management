const router = require('express').Router();

const {addAddress, listAddress, updateAddress, deleteAddress} = require('../Address/controller')

router.post('/address', addAddress)
router.get('/address', listAddress)
router.put('/address/:id', updateAddress)
router.delete('/address/:id', deleteAddress)

module.exports = router;
const router = require('express').Router();

const { addPhone, updatePhone, listPhone, removePhone } = require('../phone/controller');

router.post('/phone', addPhone);
router.put('/phone/:id', updatePhone);
router.get('/phone/all', listPhone);
router.delete('/phone/:id', removePhone);

module.exports = router;
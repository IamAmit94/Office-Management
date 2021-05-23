const router = require('express').Router();

const {addUserInfo, listUserInfo, updateUserInfo, removeUserInfo} = require('./controller')

router.post('/userInfo', addUserInfo);
router.get('/userinfo/all', listUserInfo);
router.put('/userInfo/:id', updateUserInfo);
router.delete('/userInfo/:id', removeUserInfo);

module.exports = router;
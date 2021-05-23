const router = require("express").Router();

const { addDocument, listDocument, updateDocument, removeDocument} = require("./controller");

router.post("/document", addDocument);
router.get('/document/all', listDocument);
router.put('/document/:id', updateDocument);
router.delete('/document/:id', removeDocument)

module.exports = router;

const {addNewDocument, listNewDocument, updateNewDocument, removeNewDocument}  = require('./services')

module.exports.addDocument = (req, res) => {

    addNewDocument(req.body, (error, response) =>{
        if(error) res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: ' Data inserted successfully ',
            data: response
        })
    })
}

module.exports.listDocument = (req, res) => {

    listNewDocument((error, response) =>{
        if(error) res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: ' The Listed Data is  ',
            data: response
        })
    })
}

module.exports.updateDocument = (req, res) => {

    updateNewDocument(req.params, req.body, (error, response) =>{
        if(error) res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: ' Data Updated successfully ',
            data: response
        })
    })
}


module.exports.removeDocument = (req, res) => {

    removeNewDocument(req.params, (error, response) =>{
        if(error) res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: ' Data Removed successfully ',
            data: response
        })
    })
}
 

const { addNewAddress, listNewAddress, updateNewAddress, deleteNewAddress} = require('../Address/services');

module.exports.addAddress = (req, res) => {

    addNewAddress(req.body, (error, response) =>{
        if(error) return res.status(400).send({msg: 'Something went wrong ', err: error})
        res.status(200).send({
            msg: ' Values inserted successfully',
            data: response
        })
    })
}

module.exports.listAddress = (req, res) => {

    listNewAddress((error, response) => {
            if(error) return res.status(400).send({msg: 'Something went wrong', err: error})
            res.status(200).send({
                msg: 'The address list are ',
                data: response
            })
    })
}

module.exports.updateAddress = (req, res) => {

    updateNewAddress(req.params, req.body, (error, response) =>{
        if(error) return res.status(400).send({msg: 'Something went wrong', err: error})
        res.status(200).send({
            msg: 'Values are updated successfully',
            data: response
        })
    })
}

module.exports.deleteAddress = (req, res) => {
    deleteNewAddress(req.params, (error, callback) => {
        if(error) return res.status(400).send({msg: ' Something went wrong ', err: error})
        res.status(200).send({
            msg: ' Document is deleted from the database',
            data: response
        })
    })
}
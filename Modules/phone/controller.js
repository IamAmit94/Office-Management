
const { response } = require('express')
const { addNewPhone, updateNewPhone, listNewPhone, removeNewPhone} = require('../phone/services')

module.exports.addPhone =  (req, res) => {

    addNewPhone(req.body, (error, response) => {
        if(error) return res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: 'Fields are inserted successfully',
            data: response
        })
    })
}

module.exports.updatePhone = (req, res) => {
    
    updateNewPhone(req.params, req.body, (error, response) => {
        if(error) return res.status(400).send({msg: ' Something went wrong ', err: error})
        res.status(200).send({
            msg: ' Data is updated successfully ', 
            data: response
        })
    })
}


module.exports.listPhone = (req, res) => {

    listNewPhone((error, response) => {
        if(error) return res.status(400).send({ msg: 'Something went wrong ', err: error})
        res.status(200).send({
            msg: 'The list of data',
            data: response
        })
    })
}

module.exports.removePhone = (req, res) => {

    removeNewPhone(req.params, (error, response) => {
        if(error) return res.status(400).send({ msg: 'Something went wrong ', err: error})
        res.status(200).send({
            msg: 'The filed is successfully deleted from the Collection',
            data: response
        })
    })
}
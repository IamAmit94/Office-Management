const {addNewUserInfo, listNewUserInfo, updateNewUserInfo, removeNewUserInfo}  = require('./services')

module.exports.addUserInfo = (req, res) => {

    addNewUserInfo(req.body, (error, response) =>{
        if(error) res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: ' Data inserted successfully ',
            data: response
        })
    })
}


 module.exports.listUserInfo = (req, res) => {

    listNewUserInfo((error, response) =>{
        if(error) res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: ' The Listed Data is  ',
            data: response
        })
    })
}

module.exports.updateUserInfo = (req, res) => {

    updateNewUserInfo(req.params, (error, response) =>{
        if(error) res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: ' Data Updated successfully ',
            data: response
        })
    })
}


module.exports.removeUserInfo = (req, res) => {

    removeNewUserInfo(req.params, (error, response) =>{
        if(error) res.status(400).send({msg: 'Something went wrong', err:error})
        res.status(200).send({
            msg: ' Data Removed successfully ',
            data: response
        })
    })
}
 
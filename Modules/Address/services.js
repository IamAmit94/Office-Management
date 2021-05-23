const addressModel = require('./schema')

module.exports.addNewAddress = (payload, callback) => {
    try {
        addressModel(payload).save().then((data) => {
            return  callback(null, data)
        }).catch((err) => {
            return callback(err)
        })
    } catch (error) {
        return callback(error)
    }
}

module.exports.listNewAddress = (callback) => {

    try {
        addressModel.find({}).then((data) => {
            return callback(null, data)
        }).catch((error) => {
            return callback(error)
        })
    } catch (err) {
        return callback(err)
    }
}

module.exports.updateNewAddress = (payload, body, callback) => {
            const id = payload.id
    try {
        addressModel.findByIdAndUpdate({_id:id}, {$set: body}).then((data) =>{
            return callback(null, data)
        }).catch((err) => {
            return callback(err)
        })
    } catch (error) {
        return callback(error)
    }
};

module.exports.deleteNewAddress = (payload, callback) => {
            const id = payload.id
        try {
            addressModel.findByIdAndDelete({_id: id}).then((data) => {
                return callback(data)
            }).catch((err) => {
                return callback(err)
            })
        } catch (error) {
            return callback(error)
        }
}
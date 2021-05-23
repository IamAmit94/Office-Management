const phoneModel = require('./schema')


module.exports.addNewPhone = (payload, callback) => {
     try {
         phoneModel(payload).save().then((data) =>{
                return callback(null, data)
         }).catch((err) => {
             return callback(err)
         })
     } catch (error) {
         return callback(error)
     }
}

module.exports.updateNewPhone = (payload, body, callback) => {
    try {
        const id = payload.id
         phoneModel.findByIdAndUpdate({_id:id}, {$set: body}).then((data) => {
             return callback(null, data)
         }).catch((err) => {
             return callback(err)
         })
    } catch (error) {
        return callback(error)
    }
}

module.exports.listNewPhone = (callback) => {
    try {
        phoneModel.find({}).then((data) => {
            return callback(null, data)
        }).catch((err) => {
            return callback(err)
        })
    } catch (error) {
        return callback(error)
    }
}

module.exports.removeNewPhone = (payload, callback) => {

    try {
        const id = payload.id;
        phoneModel.findByIdAndDelete({_id:id}).then((data) =>{
            return callback(null, data)
        }).catch((err) =>{
            return callback(err)
        })
    } catch (error) {
        return callback(error)
    }
}
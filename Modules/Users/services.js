const userModel = require('./schema');


module.exports.addNewUserInfo = (payload, callback) =>{
try {
        userModel(payload).save().then((data) => {
            return callback(null, data)
        }).catch((err) =>{
            return callback(err)
        })
} catch (error) {
    return callback(error)
}
}



 module.exports.listNewUserInfo = (callback) =>{
try {
        userModel.find({}).then((data) => {
            return callback(null, data)
        }).catch((err) =>{
            return callback(err)
        })
} catch (error) {
    return callback(error)
}
}


module.exports.updateNewUserInfo = (payload, body,callback) =>{
try {
    const id = payload.id;
        userModel.findByIdAndUpdate({_id:id}, {$set: body}).then((data) => {
            return callback(null, data)
        }).catch((err) =>{
            return callback(err)
        })
} catch (error) {
    return callback(error)
}
}


module.exports.removeNewUserInfo = (payload, callback) =>{
try {
        const id = payload.id;
        userModel.findByIdAndDelete({_id: id}).then((data) => {
            return callback(null, data)
        }).catch((err) =>{
            return callback(err)
        })
} catch (error) {
    return callback(error)
}
}
 
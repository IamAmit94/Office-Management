const userModel = require('./schema');


module.exports.addNewDocument = (payload, callback) =>{
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


module.exports.listNewDocument = (callback) =>{
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
    
    
    module.exports.updateNewDocument = (payload, body,callback) =>{
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
    
    
    module.exports.removeNewDocument = (payload, callback) =>{
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
     
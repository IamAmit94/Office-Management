const mongoose =  require('mongoose')

 const connection = mongoose.connect(`mongodb://127.0.0.1:27017/users`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
}).then(() => {
    console.log('You are successfully connected to the MonngoseDB ')
}).catch((error) => {
        console.log('Something went wrong ! ', error)
})

module.exports = connection;

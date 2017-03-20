var mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/socio')
    .then(() => console.log('mongodb connection success'))
    .catch((err) => console.log('error mongodb connection : ' + err))

module.exports = mongoose

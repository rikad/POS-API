var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    logId : String,
    username : String,
    levelInfo : String, // info , warning
    message : String,
    url : String
    created_at : {type : Date, default : Date.now}
})

module.exports = mongoose.model('status', schema);

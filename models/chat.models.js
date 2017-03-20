var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    account : {
        account1 : String,
        account2 : String,
    },
    chat : [new mongoose.Schema({
        type : String, // text, image, location, emoji
        text : String,
        sender : String,
        read : {type : Boolean, default : false},
        created_at : {type : Date, default : Date.now},
        updated_at : {type : Date, default : Date.now}
    })],
    created_at : {type : Date, default : Date.now},
    updated_at : {type : Date, default : Date.now}
})

module.exports = mongoose.model('chat', schema);

var mongoose = require("mongoose");
// status, share
var schema = new mongoose.Schema({
    statusId : String,
    username : String,
    message : String,
    type : String, // Status , Share
    fells : String, // bahagia, konyol, marah etc
    media : [new mongoose.Schema({
        mediaId : String
    })],
    status :  {
        like : Number,
        share : Number,
        comment : Number
    },
    takenFrom : {
        username : String,
        statusId : String
    },
    created_at : {type : Date, default : Date.now},
    updated_at : {type : Date, default : Date.now}
});

module.exports = mongoose.model('status', schema);

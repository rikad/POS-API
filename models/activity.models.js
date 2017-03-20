var mongoose = require("mongoose");
// like, comment
var schema = new mongoose.Schema({
    username : String,
    mediaId : String,
    type : String, // like, comment
    message : String,
    emoji : {
        group : String,
        idImage : Number,
    },
    fells : String, // like, dislike, wow, disgusting etc
    created_at : {type : Date, default : Date.now}
})

module.exports = mongoose.model('activity', schema);

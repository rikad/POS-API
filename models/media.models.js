var mongoose = require('mongoose');
// upload gambar / video
var schema = new mongoose.Schema({
    mediaId : String,
    username : String,
    type : String, // upload gambar
    nameFile : String, // 19091489ka31.jpg
    mimeType : String, // image/jpeg
    caption : String, // Hi' there,
    personMarker : [new mongoose.Schema({
        username : String,
        position : String
    })],
    created_at : {type : Date, default : Date.now}
})

module.exports = mongoose.model('media', schema);

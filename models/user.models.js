import mongoose from 'mongoose';

export const userModel = () => {
    const schema = new mongoose.Schema({
        username : String,
        email : String,
        pass : String,
        bio : {
            name : {
                first : String,
                last : String
            },
            address : {
                note : String,
                lat : Number,
                lon : Number
            },
            gender : String,
            interestedIn : String,
            language : String,
            religion : String,
            birthday : {
                date : {type : Date},
                place : String
            },
            relationship : String
        },
        family : [new mongoose.Schema({
            username : String,
            type : String
        })],
        detailInfo : [new mongoose.Schema({
            bio : String,
            favQuotes : String
        })],
        liveEvent : [new mongoose.Schema({
            message : String,
            date : {type : Date},
        })],
        education : [new mongoose.Schema({
            nameSchool : String,
            yearStart : Number,
            yearEnd : Number
        })],
        workPlace : [new mongoose.Schema({
            nameCompany : String,
            yearStart : Number,
            yearEnd : Number
        })],
        contact : [new mongoose.Schema({
            type : String,
            value : String
        })],
        token : String,
        roomSocket : {
            chat : String,
            wall : String,
            newPosting : String
        },
        avatarPicture : String,
        wallPicture : String,
        created_at : {type : Date, default : Date.now},
        updated_at : {type : Date, default : Date.now}
    })

    return mongoose.model('user', schema);
}

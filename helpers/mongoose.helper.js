import mongoose from 'mongoose'
import config from '../config';

const uri = config.database.local

export const connect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(uri)
        .then(() => console.log('mongodb connection success'))
        .catch((err) => console.log('error mongodb connection : ' + err))

    return mongoose;
}

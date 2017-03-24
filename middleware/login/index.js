import jwt from 'jsonwebtoken';
import config from '../../config';
const secret = config.auth.secret;

export const loginAction = (req, keyword, model) => {
    return new Promise((resolve, reject) => {
        if(keyword) {
            model.findOne(keyword, (err, user) => {
                if(err) reject('Internal Server Error')

                if(user) {
                    user.password != req.body.password ? reject("Oop's User Not Found") : ''

                    const token = jwt.sign(user, secret, {
                        expiresIn : 604800
                    });

                    let { username, email, avatarPicture, wallPicture} = user
                    resolve({ username, email, avatarPicture, wallPicture, token : token })
                } else {
                    reject("Oop's User Not Found")
                }
            })
        } else {
            reject('Parameter Not Found')
        }
    })


}

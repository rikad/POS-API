import { userModel } from '../../models/user.models';

export const registerAction = (req, keyword, model) => {
    return new Promise((resolve, reject) => {
        if(keyword.length > 0) {
            model.find({
                $and : [{ $or : keyword }]
            }, (err, data) => {
                if(err) reject(err)

                if(data.length > 0) {
                    reject('Data Avaiable')
                }
                else {
                    var { username, password, email } = req.body

                    // let data = new model()
                    model.create({ username, password, email })
                        .then(function (result) {
                            resolve(result)
                        })
                        .catch(function (err) {
                            reject(`Internal Server Error : ${err}`)
                        })
                }
            })
        }
        else {
            reject('Parameter Not Found')
        }
    })
}

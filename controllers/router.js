import express from 'express';
import config from '../config';
import { userModel } from '../models/user.models.js';
import { loginController } from './login/main.controller';
const routes = express.Router();
const secret = config.auth.secret;

const loginRoute = new loginController()

export const router = () => {
    routes.use('/user', loginRoute.main())
    return routes
}

// const userController = require('./login/main.controller');
// apiRouter.use('/', function(req, res, next){
//         var token = req.body.token || req.headers['x-access-token']
//
//         if(token) {
//             jwt.verify(token, secret, function(err, decoded) {
//                 if(err) {
//                     return res.json({ success : false, message : 'auth failure' })
//                 } else {
//                     req.decoded = decoded;
//                     next()
//                 }
//             })
//         } else{
//             return res.status(403).send({ success : false, message : 'no token dude '})
//         }
//     })
//     .get('/', function(req, res){
//     // get data from models
//     userModel.find(function(err, response){
//         var context = {
//             data : response.map(function(data){
//                 return {
//                     "name" : data.name,
//                     "gender" : data.gender
//                 }
//             }),
//             token : req.decoded
//         }
//
//         res.json(context)
//     })
// })
//

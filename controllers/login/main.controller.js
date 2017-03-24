import express from 'express';
import jwt from 'jsonwebtoken';
import { loginAction } from '../../middleware/login';
import { registerAction } from '../../middleware/register';
import { checkRequiredParam, errorChecking } from '../../middleware/router';
import { userModel } from '../../models/user.models';

const model = userModel()

export class loginController {
    constructor() {
        this.router = express.Router();
        // this.userModel = userModel();
    }

    main() {
        this.router.route('/login')
            .post(errorChecking(checkRequiredParam(this.login(), 'username', 'password')))
            .all(errorChecking(this.notAllowed()))

        this.router.route('/register')
            .post(errorChecking(checkRequiredParam(this.register(), 'username', 'email', 'password')))
            .all(errorChecking(this.notAllowed()))

        return this.router
    }

    login() {
        return async (req, res, next) => {
            const keyword = req.body['username'] ? { username : req.body['username'] } : req.body['email'] ? { email : req.body['email'] } : null;
            await loginAction(req, keyword, model)
                .then(data => {
                    res.json({code : 200, payload : data})
                })
                .catch(err => {
                    res.json({code : 500, message : err})
                });
        }
    }

    register() {
        return async (req, res, next) => {
            const keyword = []
            req.body['username'] ? keyword.push({username : req.body['username']}) : null
            req.body['email'] ? keyword.push({email : req.body['email']}) : null
            await registerAction(req, keyword, model)
                .then(data => {
                    res.json({code : 200, message : data})
                })
                .catch(err => {
                    res.json({code : 500, message : err})
                })
        }
    }

    notAllowed() {
        return (req, res) => {
            res.status(405).json({code : 405, message : 'Method Not Allowed'})
        }
    }
}

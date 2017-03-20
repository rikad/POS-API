import express from 'express';
import jwt from 'jsonwebtoken';
import { loginAction } from '../../middleware/login';
import { checkRequiredParam, errorChecking } from '../../middleware/router';

export class loginController {
    constructor() {
        this.router = express.Router();
        // this.userModel = userModel();
    }

    main() {
        this.router.route('/login')
            .post(errorChecking(checkRequiredParam(this.login(), 'username', 'password')))
            .all(errorChecking(this.notAllowed()))

        return this.router
    }

    login() {
        return async (req, res, next) => {
            const keyword = req.body['username'] ? { username : req.body['username'] } : req.body['email'] ? { email : req.body['email'] } : null;
            await loginAction(req, keyword)
                .then(data => {
                    res.json({code : 200, payload : data})
                })
                .catch(err => {
                    res.json({code : 500, message : err})
                });
        }
    }

    notAllowed() {
        return (req, res) => {
            res.status(405).json({code : 405, message : 'Method Not Allowed'})
        }
    }
}

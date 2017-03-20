import express from 'express';
import jwt from 'jsonwebtoken';
import { loginAction } from '../../middleware/login';

export class loginController {
    constructor() {
        this.router = express.Router();
        // this.userModel = userModel();
    }

    main() {
        this.login();
        return this.router
    }

    login() {
        this.router.post('/login', (req, res) => {
            const keyword = req.body.name ? { username : req.body.name } : req.body.email ? { email : req.body.email } : null;
            loginAction(req, keyword)
                .then(data => {
                    res.json({code : 200, payload : data})
                })
                .catch(err => {
                    res.json({code : 500, message : err})
                });
        })
    }

    register() {

    }
}

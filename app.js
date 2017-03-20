import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from './helpers/mongoose.helper';
import { router } from './controllers/router';

const app = express()
const access = fs.createWriteStream(path.join(__dirname + '/public/logger', 'logger.log'), {flags : 'a'});
const mongoose = connect()

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use(cors());

app.use(morgan('short', {stream : access}));
app.use(express.static(__dirname + '/public'));
app.use(router())

app.listen(6969);

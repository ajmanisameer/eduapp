const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aj:<ajmani>@cluster0-c60su.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
const app = express();
app.use(cors());

const courseapi = require('./REST/CourseApi');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', courseapi);


http.createServer(app).listen(process.env.PORT || 3000);
console.log("BackEnd Server Is On=", process.env.PORT || 3000);

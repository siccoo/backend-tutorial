const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = require('./schema');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
    if (req.method === "OPTIONS") {
        return res.end()
    }
    next();
})

mongoose.connect('mongodb://localhost:27017/message', { useNewUrlParser: true })
    .then(() => { console.log('Connected to mongoDB') })
    .catch((err) => { console.log(`Could not connect to mongoDB ${err.message}`) });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/serverss', (req, res) => {
    let {username} = req.body;
    if (username) {
        new Schema.usermodel({
            username
        })
        .save()
        .then((res) => {
            res.json(res)
        })
    
    }
    console.log(username)
})


app.listen(5000, () => console.log(`server is running on port ${5000}`))

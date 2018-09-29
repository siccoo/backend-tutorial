const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/api')

const port = process.env.PORT || 8080;

// Connecting to mongoDB
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/message')
    .then(() => {console.log('Connected to mongoDB')})
    .catch((err) => {console.log(`Failed to connect to mongoDB ${error.message}`)});


const app = express();
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//get
// post
// delete
//put

app.use('/api/')
app.get('/', (reg, res) => {
    res.json('HELLO FROM EXPRESS API')
})

app.listen(port, () => console.log(`server is running on port ${port}`))

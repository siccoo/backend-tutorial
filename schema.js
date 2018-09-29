const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: { type: String, required: true }
});

const usermodel = mongoose.model('users', User);
module.exports = {
    usermodel
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {type: String, minlength: 3, maxlength: 30, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, minlength: 5},
    message:{type: String, required: true},
    publishedAt: {type: Data, default: Data.now()}
})

module.exports = mongoose.model('User', UserSchema)
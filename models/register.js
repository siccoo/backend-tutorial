const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema ({
    name : {
        type: true, 
        minlength: 5, 
        maxlength: 50, 
        required: true
    },
    email : {
        type: true, 
        minlength: 5, 
        maxlength: 350, 
        required: true, 
        unique: true
    },
    password : {
        type: true, 
        minlength: 5, 
        maxlength: 1030, 
        required: true },
});

function validateRegister(register) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(350).required().email(),
        password: Joi.string().min(5).max(1030).required(),
        // message: Joi.string().required(),

    }
    return Joi.validate(register, schema);

}

exports.Register = Register;
exports.validate = validateRegister; 
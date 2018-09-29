const express = require('express');
const Joi = require('joi')
const User = require('../models/user');
const router = express.Router();

router.get('/', async (req, res) => {

});

router.post('/', async (req, res) => {
    const {error} = validateUser(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        message: req.body.message,
    });

    await user.save();
    res.json(user);
});


function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        message: Joi.string().required(),

    }
    return Joi.validate(user, schema);

}

module.exports = router;
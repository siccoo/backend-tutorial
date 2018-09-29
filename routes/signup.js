const {Register, validate} = require('../models/register');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    let register = await Register.findOne({ email: req.body.email });
    if (register) return res.status(400).send('Already registered..');

    const register = new Register({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    await register.save();
    res.send(register);
});

module.exports = router;
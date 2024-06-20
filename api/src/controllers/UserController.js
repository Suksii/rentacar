const User = require('../model/User')
const bcrypt = require('bcryptjs');

const bcriptSalt = bcrypt.genSaltSync(10);
const getAllUsers = async (req, res) => {
    res.send('Get all users');
}

const registerUser = async (req, res) => {
    const { firstName, lastName, phoneNumber, country, passportNumber, email, password } = req.body;
    const user = await User.create({
        firstName,
        lastName,
        phoneNumber,
        country,
        passportNumber,
        email,
        password: bcrypt.hashSync(password, bcriptSalt)
    })
    res.send(user)
}

module.exports = {
    getAllUsers,
    registerUser
}
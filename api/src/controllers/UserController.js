const User = require('../model/User')
const getAllUsers = async (req, res) => {
    res.send('Get all users');
}

const registerUser = async (req, res) => {
    const { firstName, lastName, phoneNumber, country, passportNumber, email, password } = req.body;
    await User.create({
        firstName,
        lastName,
        phoneNumber,
        country,
        passportNumber,
        email,
        password
    })
}

module.exports = {
    getAllUsers,
    registerUser
}
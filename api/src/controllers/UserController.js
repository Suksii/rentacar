const User = require('../model/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const bcryptSalt = bcrypt.genSaltSync(10);

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(422).json(error)
    }
}

const registerUser = async (req, res) => {
    const { firstName, lastName, phoneNumber, country, passportNumber, email, password } = req.body;
    try {
        const user = await User.create({
            firstName,
            lastName,
            phoneNumber,
            country,
            passportNumber,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.send(user)
    } catch (error) {
        res.status(422).json(error)
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const PassMatch = bcrypt.compareSync(password, user.password)
            if (PassMatch) {
                jwt.sign({
                    email: user.email,
                    id: user._id,
                }, process.env.JWT_SECRET, {}, (err, token) => {
                    if (err) {
                        res.status(422).json(err)
                    } else {
                    res.cookie('token', token).json({user, message: 'Logged in'})
                }
            })} else {
                res.status(422).json({ message: 'Invalid password' })
            }
        }
        else {
            res.status(422).json({ message: 'User not found' })
        }
    } catch (error) {
        res.status(422).json(error)
    }
}

const userProfile = async (req, res) => {
        const {token} = req.cookies;
        if(token) {
            jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
              if(err) {
                res.status(401).json({ message: 'Unauthorized' })
              }
                const {firstName, email, _id} = await User.findById(user.id)
                res.json({firstName, email, _id})
            })
        } else {
            res.status(401).json({ message: 'Unauthorized' })
        }
}

const logoutUser = (req, res) => {
    res.cookie('token', '').json(true)
}

module.exports = {
    getAllUsers,
    registerUser,
    loginUser,
    userProfile,
    logoutUser
}
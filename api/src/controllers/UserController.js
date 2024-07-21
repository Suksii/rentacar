const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

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
    const { firstName, lastName, phoneNumber, country, passportNumber, email, password, admin } = req.body;
    try {
        const user = await User.create({
            firstName,
            lastName,
            phoneNumber,
            country,
            passportNumber,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
            admin
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
            const {firstName, email, _id, admin} = await User.findById(user.id)
            res.json({firstName, email, _id, admin})
        })
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

const logoutUser = (req, res) => {
    res.cookie('token', '').json(true)
}

const forgotPassword = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD
            }
        });

        var mailOptions = {
            from: process.env.USER_EMAIL,
            to: email,
            subject: 'Reset Password',
            text: `http://localhost:5173/reset-password/` + user._id + '/' + token
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.status(422).json(error)
            } else {
                res.json({message: 'Email sent'})
            }
        });
    } catch (error) {
        res.status(422).json(error)
    }
}

const resetPassword = async (req, res) => {
    try {
        const {id, token} = req.params;
        const {password} = req.body;
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
            if(err) {
                res.status(401).json({message: 'Unauthorized'})
            }
            bcrypt.hash(password, bcryptSalt, async (err, hash) => {
                if(err) {
                    res.status(422).json(err)
                }
                await User.findByIdAndUpdate({_id: id}, {password: hash})
                res.json({message: 'Password updated'})
            })
        })
    } catch (error) {
        res.status(422).json(error)
    }
}

module.exports = {
    getAllUsers,
    registerUser,
    loginUser,
    userProfile,
    logoutUser,
    forgotPassword,
    resetPassword
}
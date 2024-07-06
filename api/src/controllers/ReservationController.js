const Reservation = require('../models/Reservation');
const jwt = require('jsonwebtoken');
const Car = require('../models/Car');
const User = require('../models/User');
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('car').populate('user');
        res.json(reservations);
    } catch (error) {
        console.log(error);
    }
}

const getClientReservations = async (req, res) => {
    try {
        const { token } = req.cookies;
        jwt.verify(token, process.env.JWT_SECRET, async (err, userData) => {
            if (err) {
                res.status(422).json(err);
            } else {
                const reservations = await Reservation.find({ user: userData.id }).populate('car').populate('user');
                res.json(reservations);
            }});
    } catch (error) {
        console.log(error);
    }
}

const addReservation = async (req, res) => {
    try {
        const { token } = req.cookies;
        jwt.verify(token, process.env.JWT_SECRET, async (err, userData) => {
            if (err) {
                res.status(422).json(err);
            } else {
                const userDet = await User.findById(userData.id);
                const carDet = await Car.findById(req.params.id);
                const { startDate, endDate, rentalDate, totalPrice } = req.body;
                const newReservation = await Reservation.create({
                    user: userDet,
                    car: carDet,
                    rentalDate,
                    startDate,
                    endDate,
                    totalPrice,
                });
                res.json(newReservation);
            }});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllReservations,
    getClientReservations,
    addReservation,
}
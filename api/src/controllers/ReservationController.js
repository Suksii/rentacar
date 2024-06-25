const Reservation = require('../model/Reservation');
const jwt = require('jsonwebtoken');
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('car').populate('user');
        res.json(reservations);
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
        const newReservation = await Reservation.create({
            ...req.body,
            user: userData.id
        });
                console.log(newReservation);
        const savedReservation = await newReservation.save();
        res.json(savedReservation);
            }});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllReservations,
    addReservation
}
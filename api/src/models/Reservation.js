const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema({
    rentalDate: Date,
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    startDate: Date,
    endDate: Date,
    totalPrice: Number,
    approved: {
        type: Boolean,
    },
    isCarRated: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
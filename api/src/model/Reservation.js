const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema({
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
    totalPrice: Number
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
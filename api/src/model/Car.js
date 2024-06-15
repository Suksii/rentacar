const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    model: String,
    name: String,
    year: Number,
    fuelType: String,
    seats: Number,
    transmission: String,
    description: String,
    price: Number
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    model: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    fuelType: { type: String, required: true },
    seats: { type: Number, required: true },
    transmission: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

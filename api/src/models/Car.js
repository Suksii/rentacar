const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    model: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    fuelType: { type: String, required: true },
    transmission: { type: String, required: true },
    type: { type: String, required: true },
    seats: { type: Number, required: true },
    price: { type: Number, required: true },
    engine: { type: String, required: true },
    mileage: { type: Number, required: true },
    drive: { type: String, required: true },
    plate: { type: String, required: true },
    color: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
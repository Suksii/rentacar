const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }
}, { timestamps: true });

const carSchema = new Schema({
    model: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    fuelType: { type: String, required: true },
    seats: { type: Number, required: true },
    transmission: { type: String, required: true },
    description: { type: String, required: true },
    rating: [ratingSchema],
    price: { type: Number, required: true },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
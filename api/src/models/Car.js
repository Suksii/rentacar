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
    ratings: {
        type: [Number],
        default: []
    },
    averageRating: {
        type: Number,
        default: 0
    }
});

carSchema.methods.calculateAverageRating = function () {
    if (this.ratings.length === 0) {
        return 0;
    }
    const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / this.ratings.length;
};

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
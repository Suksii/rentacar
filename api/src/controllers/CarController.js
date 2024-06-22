const Car = require('../model/Car');
const getAllCars = async (req, res) => {
    res.send('Get all cars');
}

const addCar = async (req, res) => {
    const { model, name, year, image, fuelType, seats, transmission, description, price } = req.body;
    try {
        const car = await Car.create({
            model,
            name,
            year,
            image,
            fuelType,
            seats,
            transmission,
            description,
            price
        })
        res.send(car)
        } catch (error) {
            res.status(422).json(error)
    }
}

module.exports = {
    getAllCars,
    addCar
}
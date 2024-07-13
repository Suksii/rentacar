const Car = require('../models/Car');
const fs = require('fs');
const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find()
        res.json(cars)
    } catch (error) {
        res.status(422).json(error)
    }
}

const getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id)
        res.json(car)
    } catch (error) {
        res.status(422).json(error)
    }
}

const addCar = async (req, res) => {
    const { model, name, year, image, fuelType, seats, transmission, description, price, mileage, type, plate, color, engine, drive } = req.body;
    try {
        const car = await Car.create({
            model,
            name,
            year,
            image,
            fuelType,
            seats,
            type,
            engine,
            mileage,
            drive,
            plate,
            color,
            transmission,
            description,
            price,

        })
        res.send(car)
        } catch (error) {
            res.status(422).json(error)
    }
}
const uploadImage = (req, res) => {
    const {path, originalname} = req.files[0];
    const extension = originalname.split('.').pop();
    const newPath = path + '.' + extension;
    fs.renameSync(path, newPath);
    res.send(newPath.split(`\\`).slice(1));
}
const deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id)
        res.send('Car deleted')
    } catch (error) {
        res.status(422).json(error)
    }
}
const updateCar = async (req, res) => {
    const { model, name, year, image, fuelType, seats, transmission, description, price, engine, mileage, drive, plate, color, type } = req.body;
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, {
            model,
            name,
            year,
            image,
            fuelType,
            seats,
            transmission,
            description,
            price,
            type,
            engine,
            mileage,
            drive,
            plate,
            color
        }, {new: true})
        res.send(car)
    } catch (error) {
        res.status(422).json(error)
    }
}

const addRating = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }
        car.ratings.push(req.body.rate);
        car.averageRating = car.calculateAverageRating();
        await car.save();
        res.send(car);
    } catch (error) {
        res.status(422).json(error);
    }
};



module.exports = {
    getAllCars,
    getCar,
    addCar,
    uploadImage,
    deleteCar,
    updateCar,
    addRating,
}
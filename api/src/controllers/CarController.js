const Car = require('../model/Car');
const fs = require('fs');
const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find()
        res.json(cars)
    } catch (error) {
        res.status(422).json(error)
    }
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

const uploadImage = (req, res) => {
    const {path, originalname} = req.files[0];
    const extension = originalname.split('.').pop();
    const newPath = path + '.' + extension;
    fs.renameSync(path, newPath);
    res.send(newPath.split(`\\`).slice(1));
}

module.exports = {
    getAllCars,
    addCar,
    uploadImage
}
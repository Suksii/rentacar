const express = require('express');
const router = express.Router();
const multer = require('multer');

const CarController = require('../controllers/CarController');

const photoUpload = multer({dest: 'uploads'});

router.get('/', CarController.getAllCars);
router.get('/:id', CarController.getCar);
router.post('/add', CarController.addCar);
router.post('/upload', photoUpload.array('photos', 100), CarController.uploadImage);
router.delete('/delete/:id', CarController.deleteCar);
router.put('/update/:id', CarController.updateCar);

module.exports = router;
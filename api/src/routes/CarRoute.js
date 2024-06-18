const express = require('express');
const router = express.Router();

const CarController = require('../controllers/CarController');

router.get('/', CarController.getAllCars);

module.exports = router;
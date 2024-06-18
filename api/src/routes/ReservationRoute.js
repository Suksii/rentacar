const express = require('express');
const router = express.Router();

const ReservationController = require('../controllers/ReservationController');

router.get('/', ReservationController.getAllReservations);

module.exports = router;
const express = require('express');
const router = express.Router();

const ReservationController = require('../controllers/ReservationController');

router.get('/', ReservationController.getAllReservations);
router.post('/add', ReservationController.addReservation);

module.exports = router;
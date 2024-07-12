const express = require('express');
const router = express.Router();

const ReservationController = require('../controllers/ReservationController');

router.get('/', ReservationController.getAllReservations);
router.put('/:id/rate', ReservationController.isRated);
router.get('/client-reservations', ReservationController.getClientReservations);
router.post('/add/:id', ReservationController.addReservation);
router.post('/:id/approve', ReservationController.approveReservation);

module.exports = router;
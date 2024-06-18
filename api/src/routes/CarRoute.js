const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Car route');
});

module.exports = router;
const express = require('express'); //express app
const router = express.Router(); //router logic

//import controllers
const tripsController = require('../controllers/trips');

//define route
router
    .route('/trips')
    .get(tripsController.tripsList);
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;
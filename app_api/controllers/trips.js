const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register
const Model = mongoose.model('trips');

//lists all trips
//must include HTML status and JSON message

const tripsList = async(req, res) => {
    const q = await Model
    .find({}) //no filter
    .exec();


    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }
};

module.exports = {
    tripsList
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
    .find({'code' : req.params.tripCode}) //no filter
    .exec();


    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};

const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if(!q)
    {
        return res
            .status(400)
            .json(err);

    } else {
        return res
            .status(201)
            .json(q);
    }
};
const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register
const Model = mongoose.model('trips');

//lists all trips
//must include HTML status and JSON message

const tripsList = async(req, res) => {
    const q = await Model
    .find({}) //no filter
    .exec();

    console.log(q);

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
const mongoose = require("mongoose");


const Ambulance = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    catgory: {
        type: String,
        require: true,
    },
    number: {
        type: Number,
        require: true,
    }
})
const AmbulanceModel = mongoose.model("Ambulance", Ambulance)
module.exports = AmbulanceModel; 
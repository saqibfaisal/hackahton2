const mongoose = require("mongoose");


const Police = new mongoose.Schema({
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
const PoliceModel = mongoose.model("Police", Police)
module.exports = PoliceModel; 
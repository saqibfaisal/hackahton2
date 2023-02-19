const mongoose = require("mongoose");


const FireBrigade = new mongoose.Schema({
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
const FireBrigadeModel = mongoose.model("FireBrigade", FireBrigade)
module.exports = FireBrigadeModel; 
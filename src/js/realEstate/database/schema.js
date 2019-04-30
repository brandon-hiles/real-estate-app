let mongoose = require('mongoose')

let schema = new mongoose.Schema({
    address: String,
    city: String,
    state: String,
    rooms: Number,
    price: Number,
    floorSpace: Number,
    extras: Array,
    homeType: String,
    image: String
})

module.exports = mongoose.model('Model', schema)

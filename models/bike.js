var mongoose = require('mongoose')
//var Schema = mongoose.Schema

var bikeSchema = new mongoose.Schema({
    brand: String,
    model: String,
    price: {type: Number}
})

module.exports = mongoose.model('bike', bikeSchema)


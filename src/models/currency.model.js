const mongoose = require( 'mongoose')

const currencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, ' Name must be specified']
    },
    symbol: {
        type: String, 
        required: [ true, " Symbol must be specified"]
    }
})

module.exports = mongoose.model('Currency', currencySchema)
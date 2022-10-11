const mongoose = require( 'mongoose')
const json = require( '../../../utils/currencies.json')

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

module.exports = mongoose.model('currency', currencySchema)
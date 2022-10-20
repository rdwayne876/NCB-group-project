const mongoose = require( 'mongoose')

const beneficiary = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, " Name must be specified"]
    },
    accNo: {
        type: String,
        required: [ true, " Account number must be specified"]
    }
})
const mongoose = require( 'mongoose')

const transactionSchema = new mongoose.Schema({
    accId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [ true, " Account Id must be specified"]
    },
    openingBalance: {
        type: Number
    },
    closingBalance: {
        type: Number
    },
    type: {
        type: mongoose.Schema.Types.ObjectId, 
        required: [ true, ' Name must be specified']
    },
    amount: {
        type: Number, 
        required: [ true, " Symbol must be specified"]
    }, 
    description: {
        type: String,
        required: [ true, "Transaction description must be specified"]
    },
    transactionId: {
        type: String,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Transaction', transactionSchema)
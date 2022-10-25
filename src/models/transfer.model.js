const mongoose = require( 'mongoose')

const transferSchema = new mongoose.Schema({
    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        required: [ true, "Account must be specified"]
    },
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        required: [ true, "Beneficiary must be sepcified"]
    },
    amount:{
        type: Number,
        required: [ true, "Amount must be specified"]
    },
    fromTransaction: {
        type: mongoose.Schema.Types.ObjectId
    },
    toTransaction:{
        type: mongoose.Schema.Types.ObjectId
    }
},{
    timestamps: true
})

module.exports = mongoose.model( 'Transfer', transferSchema)
const mongoose = require( 'mongoose')

const accountSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [ true, "Account must belong to a user"]
    },
    accType:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "AccountType",
        required: [ true, "Account type must be specified"]
    },
    accNo:{
        type: String,
        required: [true, "Account number must be specified"]
    },
    currency:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Currency",
        required: [ true, "Account currency must be specified"]
    },
    balance:{
        type: Number,
        default: 0
    },
    transactions:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
        }
    ],
},
{
    timestamps: true
})

module.exports = mongoose.model( "Account", accountSchema)
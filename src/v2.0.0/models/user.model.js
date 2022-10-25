const mongoose = require( 'mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [ true, "First Name must be specified"]
    },
    lastName:{
        type: String,
        required: [ true, "Last Name must be specified"]
    },
    email:{
        type: String,
        required: [ true, "Email must be specified"],
        unique: [ true, "Only one email address per user"]
    },
    password:{
        type: String,
        required: [ true, "Password must be specified"]
    },
    cellPhone:{
        type: String,
        unique: [ true, "Only one phone number per user"],
        required: [ true, "A cell phone number must be specified"]
    },
    username:{
        type: String,
        unique: [ true, "Only one username per person"],
        required: [ true, "username must be specified"]
    },
    trn:{
        type: String,
        required: [ true, "TRN must be specified"],
        unique: [ true, "One TRN per user"]
    },
    accounts: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Account",
        }
    ],
    creditCards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CreditCard"
        }
    ], 
    debitCard:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "DebitCard",
    },
    beneficiaries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Beneficiary'
        }
    ],
},
{
    timestamps: true
})

module.exports = mongoose.model( "User", userSchema)
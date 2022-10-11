const mongoose = require( 'mongoose')
const { stringify } = require('querystring')

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
    homePhone:{
        type: String,
    },
    username:{
        type: String,
        unique: [ true, "Only one username per person"],
        required: [ true, "username must be specified"]
    },
    dateOfBirth:{
        type: Date,
        required: [true, "D.O.B must be specified"]
    },
    gender: {
        type: String,
        values: [ "MALE", "FEMALE", "OTHER"]
    },
    idVerification:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "IdVerification",
        required: [true, "An id must be specified to verify user"]
    },
    trn:{
        type: String,
        required: [ true, "TRN must be specified"],
        unique: [ true, "One TRN per user"]
    },
    mailingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Address",
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
            ref: "creditCard"
        }
    ]
},
{
    timestamps: true
})

module.exports = mongoose.model( "User", userSchema)
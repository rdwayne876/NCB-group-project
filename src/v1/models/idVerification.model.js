const mongoose = require( 'mongoose')

const idVerificationSchema = new mongoose.Schema({
    type:{
        type: String,
        required: [ true, 'ID type must be specified']
    },
    number:{
        type: String,
        required: [ true, "ID number must be specified"],
        unique: [ true, "ID number can only belong to one user"]
    }, 
    expDate:{
        type: Date,
        required: [ true, "ID expiry Date must be specified"]
    },
    image:{
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('IDVerification', idVerificationSchema)
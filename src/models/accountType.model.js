const mongoose = require( 'mongoose')

const accountTypeSchema = new mongoose.Schema({
    name:{
        type: String,
    }
})

module.exports = mongoose.model('AccountType', accountTypeSchema)
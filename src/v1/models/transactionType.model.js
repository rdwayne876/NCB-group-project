const mongoose = require( 'mongoose')

const transactionTypeSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    transactions:[
        {
            type: mongoose.Schema.Types.ObjectId, 
        }
    ]
})

module.exports = mongoose.model('TransactionType', transactionTypeSchema)
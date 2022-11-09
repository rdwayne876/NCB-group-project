const mongoose = require( 'mongoose')

const creditCardSchema = new mongoose.Schema({
    nameOnCard: {
        type: String
    },
    cardNumber: {
        type: String
    },
    expirationDate: {
        type: Date
    },
    cvv: {
        type: String
    }, 
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TransactionType'
        }
    ],
    creditLimit: {
        type: Number
    },
    availableBalance: {
        type: Number
    },
    statementBalance: {
        type: Number
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('CreditCard', creditCardSchema)
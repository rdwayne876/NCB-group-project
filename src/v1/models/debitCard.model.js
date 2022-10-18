const mongoose = require( 'mongoose')

const debitCardSchema = new mongoose.Schema({
    nameOnCard: {
        type: String
    },
    cardNumber: {
        type: string
    },
    expirationDate: {
        type: Date
    },
    cvv: {
        type: String
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('DebitCard', debitCardSchema)
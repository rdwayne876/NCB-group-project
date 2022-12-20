const mongoose = require( 'mongoose')

const debitCardSchema = new mongoose.Schema({
    name: {
        type: String
    },
    cardNumber: {
        type: String
    },
    expDate: {
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
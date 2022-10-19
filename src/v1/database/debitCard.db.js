const DebitCard = require( '../models/debitCard.model')
const {find, createOne, deleteOne, findAndDelete, getOne, updateOne} = require( '../../../db/db.utils');


const createDebitCard = async( newCard) => {
    try {
        return createOne( DebitCard, newCard)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

module.exports = {
    createDebitCard
}
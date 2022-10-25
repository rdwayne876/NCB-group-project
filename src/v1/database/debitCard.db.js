const DebitCard = require( '../models/debitCard.model')
const {find, createOne, deleteOne, findAndDelete, getOne, updateOne} = require( '../../../db/db.utils');


const createCard = async( newCard) => {
    try {
        return createOne( DebitCard, newCard)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const getCard = async( id) => {
    try {
        return getOne( DebitCard, id)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

module.exports = {
    createCard,
    getCard
}
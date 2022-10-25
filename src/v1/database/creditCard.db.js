const CreditCard = require( '../../models/creditCard.model')
const {find, createOne, deleteOne, findAndDelete, getOne, updateOne} = require( '../../../db/db.utils');


const createCard = async( newCard) => {
    try {
        return createOne( CreditCard, newCard)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const getCard = async( id) => {
    try {
        return getOne( CreditCard, id)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const updateCard = async( id, updates) => {
    try {
        return updateOne( CreditCard, id, updates)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

module.exports = {
    createCard,
    getCard,
    updateCard
}
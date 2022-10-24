const Transfer = require( '../models/transfer.model')
const {  createOne, } = require( '../../../db/db.utils')

const createTransfer = async( newTransfer) => {
    try {
        return createOne( Transfer, newTransfer)
    } catch( error){
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

module.exports = { createTransfer}
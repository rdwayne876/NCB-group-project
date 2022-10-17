const Transaction = require( '../models/transaction.model')
const{ getOne, createOne} = require( '../../../db/db.utils')


const createTransaction = async( newTransaction) => {
    try {
        return createOne( Transaction, newTransaction)
    } catch (error) {
        throw { status: 500, message: error?.message || error}
    }
} 

const getTransaction = async( id) => {
    try {
        return getOne( Transaction, id)
    } catch( error){
        throw {
            status: 500,
            message: error?.message || error
        }
    }    
}

module.exporst = {
    createTransaction,
    getTransaction
}
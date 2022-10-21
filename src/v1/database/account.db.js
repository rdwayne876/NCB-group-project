const Account = require( '../models/account.model')
const { getAll, getOne, createOne, updateOne, deleteOne } = require( '../../../db/db.utils')

const getAllAcounts = async() => {
    try {
        return getAll( Account)
    } catch (error) {
        throw{
            status: 500,
            message: error?.message || error
        }
    }
}

const getAccount = async( id) => {
    try {
        return getOne( Account, id)
    } catch( error){
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const createAccount = async( newAccount) => {
    try {
        return createOne( Account, newAccount)
    } catch( error){
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const updateAccount = async( id, updates) => {
    //check if account exists
    const account = await getOne( Account, id)

    if( !account) {
        throw{ 
            status: 400,
            message:"no user found"
        }
    }

    try {
        return updateOne(Account, id, updates)
    } catch (error) {
        throw {
            status: 500, 
            message: error?.message || error
        }
    }
}

const deleteAccount = async( id) => {
    try {
        return deleteOne( Account, id)
    } catch( error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const findAccount = async( queryObject) => {
    try {
        return find( Account, queryObject)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}


module.exports = { getAllAcounts, getAccount, findAccount, createAccount, updateAccount, deleteAccount}
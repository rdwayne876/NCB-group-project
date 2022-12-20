const User = require( '../../models/user.model')
const TransactionType = require( '../../models/transactionType.model')
const AccType = require( '../../models/accountType.model')
const Currency = require( '../../models/currency.model')
const{ find, createOne, getOne, updateOne} = require( '../../../db/db.utils')

const createUser = async( newUser) => {
    //check for existing user by username or email, cellphone or trn
    const existingUser = await find(User, { $or: [{email: newUser.email}, {username: newUser.email}, {cellPhone: newUser.cellPhone}, {trn: newUser.trn}]})
    
    if( existingUser.length != 0) {
        // throw error if user already exists
        throw {
            status: 409,
            message: 'User already exists'
        }
    }

    try{
        return createOne( User, newUser)
    } catch ( error){
        throw { status: 500, message: error?.message || error}
    }
}

const findUser = async( queryObject, options=[]) => {
    // Query db for user
    const user = await find( User, queryObject, options)

    if( user.length == 0 ) {
        throw {
            status: 409,
            message: "User not found"
        }
    }

    try{
        return user[0]
    } catch ( error) {
        throw { status: 500, message: error?.message || error}
    }
}

const getUser = async( id) => {
    try {
        return getOne( User, id)
    } catch (error) {
        throw { status: 500, message: error?.message || error}
    }
}

const updateUser = async( id, updates) => {
    try {
        return updateOne( User, id, updates)
    } catch (error) {
        throw { status: 500, message: error?.message || error}
    }
}

const getAllTypes = async() => {
    try {
        return [await getAll( TransactionType),await getAll( AccType), await getAll( Currency)]
    } catch( error) {
        throw { status: 500, message: error?.message || error}
    }
}

module.exports = { 
    createUser,
    findUser,
    getUser,
    updateUser,
    getAllTypes
}
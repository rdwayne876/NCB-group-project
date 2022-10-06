const Account = require( '../models/account.model')
const { getAll } = require( '../../../db/db.utils')

const getAllAcounts = async() => {
    try {
        return getAll( Account)
    } catch (error) {
        console.error( error)
    }
}

module.exports = { getAllAcounts}
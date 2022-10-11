const KeyValue = require( '../models/keyValue.model')
const { getOne, updateOne } = require( '../../../db/db.utils')
const id = "63443741b666aecc3faee5b1"

const getOneValue = async() => {
    try { 
        return getOne( KeyValue, id)
    } catch (error) {
        console.error( error)
        return error
    }
}

const updateOneValue = async( newValue) => {
    try {
        return updateOne( KeyValue, id, newValue)
    } catch (error) {
        console.error( error)
        return error
    }
}

module.exports = {
    getOneValue, updateOneValue
}
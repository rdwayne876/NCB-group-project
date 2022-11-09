const KeyValue = require( '../../models/keyValue.model')
const { getOne, updateOne } = require( '../../../db/db.utils')

const getOneValue = async( id) => {
    try { 
        return getOne( KeyValue, id)
    } catch (error) {
        console.error( error)
        return error
    }
}

const updateOneValue = async( id, newValue) => {
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
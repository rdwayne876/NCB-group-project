const KeyValue = require( '../models/keyValue.model')
const { getOne, updateOne } = require( '../../../db/db.utils')
const id = 1

const getOneValue = async() => {
    try { 
        getOne( KeyValue, id)
    } catch (error) {
        console.error( error)
        return error
    }
}

const updateOneValue = async( newValue) => {
    try {
        updateOne( KeyValue, id, newValue)
    } catch (error) {
        console.error( error)
        return error
    }
}

module.exports = {
    getOneValue, updateOneValue
}
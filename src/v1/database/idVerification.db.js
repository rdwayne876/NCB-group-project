const idVerification = require( '../models/idVerification.model')
const {find, createOne} = require( '../../../db/db.utils')

const saveId = async( newId) => {
    //check for existing Id
    const existingId = await find( idVerification, {number: newId.number})

    console.log( existingId.length);

    if( existingId.length != 0){
        console.log("Custom error");
        // Throw error if id already exists
        throw {
            status: 409,
            message: 'Id already exists'
        }
    }

    try {
        //save user to db
        return createOne( idVerification, newId)
    } catch (error) {
        console.log(" Console err below");
        console.error(error);
        throw { status: 500, message: error?.message || error}
    }
}

module.exports = { saveId}
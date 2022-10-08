const idVerification = require( '../database/idVerification.db')

const saveNewId = async( newId) => {

        const savedId = await idVerification.saveId( newId)
        console.log(savedId);
        return savedId
    
}

module.exports = { saveNewId}
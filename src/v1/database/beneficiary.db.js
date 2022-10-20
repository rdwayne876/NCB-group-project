const Beneficiary = require( '../models/beneficiary.model')
const { getAll, getOne, createOne, updateOne, deleteOne } = require( '../../../db/db.utils')

const getAllBeneficiaries = async() => {
    try {
        return getAll( Beneficiary)
    } catch (error) {
        throw{
            status: 500,
            message: error?.message || error
        }
    }
}

const getBeneficiary = async( id) => {
    try {
        return getOne( Beneficiary, id)
    } catch( error){
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const createBeneficiary = async( newBeneficiary) => {
    try {
        return createOne( Beneficiary, newBeneficiary)
    } catch( error){
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const updateBeneficiary = async( id, updates) => {
    //check if beneficiary exists
    const beneficiary = await getOne( Beneficiary, id)

    if( !beneficiary) {
        throw{ 
            status: 400,
            message:"no user found"
        }
    }

    try {
        return updateOne(Beneficiary, id, updates)
    } catch (error) {
        throw {
            status: 500, 
            message: error?.message || error
        }
    }
}

const deleteBeneficiary = async( id) => {
    try {
        return deleteOne( Beneficiary, id)
    } catch( error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}


module.exports = { getAllBeneficiaries, getBeneficiary, createBeneficiary, updateBeneficiary, deleteBeneficiary}
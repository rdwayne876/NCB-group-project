const { checkSchema, validationResult} = require( 'express-validator')
const User = require( '../models/user.model')
const { find } = require('../../../db/db.utils')

const registrationSchema = {
    firstName:{
        notEmpty: true,
        errorMessage: "First name is required"
    },
    lastName:{
        notEmpty: true,
        errorMessage: "Last name is required"
    },
    email:{
        normalizeEmail: true,
        notEmpty: true,
        errorMessage: "Email address is required",
        custom: {
            options: async value => {
                const user = await find(User, { email: value })
                if (user.length > 0) {
                    return Promise.reject("Email already in use")
                }
            }
        }
    },
    cellPhone: {
        notEmpty: true,
        errorMessage: "Cellphone is required"
    },
    trn: {
        notEmpty: true,
        errorMessage: "TRN is required"
    }     
}
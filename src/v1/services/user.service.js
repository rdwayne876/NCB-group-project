const User = require( '../database/user.db')

const getUser = async( id) => {
    const user = await User.getUser( id)

    await user.populate([
        {
            path: 'accounts', 
            select: { 'userID': 0}, 
            populate:[
                {path: 'accType'}, 
                {path: 'currency'}, 
                {
                    path: 'transactions',
                    populate: 'type'
                }
            ]
        },
        {
            path: 'creditCards',
            populate: {
                path: 'transactions',
                populate: [{path: 'transactions'}]
            }
        },
        {
            path: 'beneficiaries'
        }
    ])
    
    return user
}

const updateUser = async( id, updates) => {

    const updatedUser =  await User.updateUser( id, updates)
    return updatedUser
}

module.exports = {
    getUser,
    updateUser
}
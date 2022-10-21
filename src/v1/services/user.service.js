const User = require( '../database/user.db')

const getUser = async( id) => {
    const user = await User.getUser( id)
    return user
}

module.exports = {
    getUser
}
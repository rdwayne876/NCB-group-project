const User = require( '../database/user.db')
const idVerificationService = require( './idVerification.service')
const bcrypt = require( 'bcryptjs')
const salt = bcrypt.genSaltSync(10)
const { createAccessToken} = require( '../../../utils/token')

const registerUser = async( newUser, password) => {
    //hash password
    encryptedPassword = await bcrypt.hash( password, salt)

    // add hashed password
    const userToCreate = {
        ...newUser,
        password: encryptedPassword
    }

    try {
        //Create user
        const createdUser = await User.createUser( userToCreate)
        // generate access token
        const accessToken = createAccessToken({user: createdUser._id})

        const updatedId = await idVerificationService.verifyUser(createdUser.idVerification)

        return { createdUser, accessToken}
    } catch (error) {
        throw error
    }
}

const login = async( username, password) => {

    try {
        // get user from username
        const user = await User.findUser({username: username})

        console.log(user);

        if( user && ( await bcrypt.compare( password, user.password))){
            //generate access token
            accessToken = createAccessToken({ user: user._id})

            return { user, accessToken}
        }
        
        throw{
            status: 401, 
            message: "Invalid Credentials"
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    registerUser,
    login
}
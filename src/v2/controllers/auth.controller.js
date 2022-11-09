const idVerificationService = require( '../services/idVerification.service')
const authService = require( '../services/auth.service')

const registerUser = async( req, res) => {
    //get user data from request
    const { body } = req

    //Check if all fields are present
    if( 
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.password ||
        !body.cellPhone ||
        !body.username 
    ) {
        // return error if not all required fields are present
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "All fields are required" 
            }
        })
        return
    }

    try {
        // save new user
        const newUser = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email, 
            cellPhone: body.cellPhone,
            homePhone: body.homePhone,
            username: body.username,
            trn: body.trn
        }
        const registeredUser = await authService.registerUser( newUser, body.password)

        //return registered user
        res.status( 201).json({
            status: "SUCCESS",
            data: registeredUser
        })
    } catch (error) {
        res
          .status(error?.status || 500)
          .json({ status: "FAILED", data: { error: error?.message || error } });
      }
}

const login = async( req, res) => {
    //get login credentials from req.body
    const { body} = req

    //check if all required fields are present
    if( !body.username || !body.password) {
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "All fields required"
            }
        })
    }

    try {
        const user = await authService.login( body.username, body.password)

        res.status( 200).json({
            status: "SUCCESS",
            data: user
        })
        
    } catch (error) {
        res
          .status(error?.status || 500)
          .json({ status: "FAILED", data: { error: error?.message || error } });
    }

    
}

module.exports ={
    registerUser,
    login
}
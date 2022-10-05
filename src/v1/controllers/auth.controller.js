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
        !body.username ||
        !body.trn ||
        !body.idType ||
        !body.idNumber ||
        !body.idExpDate 
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

    //save user id verification
    const newId = {
        type: body.idType,
        number: body.idNumber,
        expDate: body.idExpDate,
        image: body.idImage
    }

    const createdId = await idVerificationService.saveNewId( newId)

    // save new user
    const newUser = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email, 
        cellPhone: body.cellPhone,
        homePhone: body.homePhone,
        username: body.username,
        dateOfBirth: body.dateOfBirth,
        gender: body.gender,
        idVerification: createdId._id,
        trn: body.trn
    }

    const registeredUser = await authService.registerUser( newUser, body.password)
    
    //return registered user
    res.status( 201).json({
        status: "SUCCESS",
        data: registeredUser
    })
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

    const user = await authService.login( body.username, body.pasword)

    res.status( 200).json({
        status: "SUCCESS",
        data: user
    })
}

module.exports ={
    registerUser,
    login
}
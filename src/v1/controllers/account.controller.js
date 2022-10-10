const accountService = require( '../services/account.service')

const getAllAccounts = async( req, res) => {
    //get all accounts from service
    const allAccounts = await accountService.getAllAcounts()

    // return all accounts
    res.status(200).json({
        status: "OK",
        data: allAccounts
    })
}

const getAccount = async( req, res) => {
    //get id and data from request params and body
    const { body, params: id} = req

    // throw error if id is not present
    if( !id) {
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "Account not found"
            }
        })
        return
    }

    // get one account
    const account = await accountService.getAccount( id)

    // return account
    res.status( 200).json({
        status: "SUCCESS",
        data: {
            account
        }
    })
}

const createAccount = async( req, res) => {
    // get account info from request body
    const { body} = req

    //check if required fields are present
    if(
        !body.userID ||
        !body.accType ||
        !body.currency
    ) {
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "All fields required"
            }
        })
        return
    }

    // create new account object
    const newAccount = {
        userID: body.userID,
        accType: body.accType,
        currency: body.currency
    }
    // create account in service
    const createdAccount = await accountService.createNewAccount( newAccount)

    res.status( 201).json({
        status: "SUCCESS",
        data: {
            createdAccount
        }
    })
}

const updateAccount = async( req, res) => {
    //get id and data from request params and body
    const { body, params: id} = req

    // throw error if id is not present
    if( !id) {
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "Account not found"
            }
        })
        return
    }

    //update info in the account service
    const updatedAccount = await accountService.updateAccount( id, body)

    // return updated account
    res.status( 200).json({
        status: "SUCCESS",
        data: {
            updatedAccount
        }
    })
}

const deleteAccount = async( req, res) => {
    // get id from params
    const { params: {id}} = req
    // throw error if id is not present
    if( !id) {
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "Account not found"
            }
        })
        return
    }

    // delete account from service
    accountService.deleteAccount( id)

    res.status( 204).json({
        status: "SUCCESS"
    })
}

module.exports = { 
    getAllAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount
 }
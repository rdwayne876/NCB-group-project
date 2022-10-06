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

module.exports = { getAllAccounts }
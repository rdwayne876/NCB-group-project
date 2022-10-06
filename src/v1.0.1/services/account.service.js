const accountModel = require("../database/account.db")

const getAllAcounts = async() => {
    // Query db for accounts
    const allAccounts = await accountModel.getAllAcounts()
    return allAccounts
}

module.exports = { getAllAcounts}
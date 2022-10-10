const Account = require("../database/account.db")
const KeyValue = require( "../database/keyValue.db")

const getAllAcounts = async() => {
    // Query db for accounts
    const allAccounts = await accountModel.getAllAcounts()
    return allAccounts
}

const getAccount = async( id) => {
    // Query db for account
    const account =  await Account.getAccount( id)
    return account
}

const createAccount = async( newAccount) => {
    // Get acc #
    const accNo = KeyValue.getOneValue()

    //insert account #
    const accountToInsert = {
        ...newAccount,
        accNo: accNo.value
    }

    // save account to db
    const createdAccount = await Account.createAccount( accountToInsert)

    // if successful
    if( createdAccount) {
        accNo.value ++
        KeyValue.updateOneValue( accNo)

        return createdAccount
    }
}

const updateAccount = async( updatedAccount, id) => {
    // Query db to update record
    const updatedAccount = await Account.updateOneAccount( updatedAccount, id)

    return updatedAccount
}

const deleteAccount = async( id) => {
    // Query db to delete record
    const deletedAccount = await Account.deleteAccount( id)

    return deletedAccount
}

module.exports = { 
    getAccount,
    getAllAcounts,
    createAccount,
    updateAccount,
    deleteAccount
}
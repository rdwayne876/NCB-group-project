const Transaction = require( '../database/transaction.db')
const Account = require( '../database/account.db')
const KeyValue = require( "../database/keyValue.db")
const transNoId = "634d78842e39785826119048"
const credit = "634d7b782e3978582611904a"

const createTransaction = async( newTransaction) => {
    //get trans id
    const transId = await KeyValue.getOneValue( transNoId)

    // get account to obtain opening balance and closing balance
    const account = await Account.getAccount( newTransaction.AccId)

    const openingBalance = account.balance

    const closingBalance =  newTransaction.Type = credit ? openingBalance + newTransaction.amount :  openingBalance - newTransaction.amount

    // add new values to object
    const transactionToInsert ={
        ...newTransaction,
        openingBalance: openingBalance,
        closingBalance: closingBalance,
        transactionId: transId
    }

    // save transaction to db
    
}
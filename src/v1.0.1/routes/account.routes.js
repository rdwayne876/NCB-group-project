const router = require( 'express').Router()
const accountController = require( '../controllers/account.controller')

router.route( '/').get(accountController.getAllAccounts)

module.exports = router
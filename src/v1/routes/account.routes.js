const router = require( 'express').Router()
const accountController = require( '../controllers/account.controller')

router.route( '/').get(accountController.getAllAccounts)
                    .post( accountController.createAccount)

router.route( '/:id').get( accountController.getAccount)
                        .patch( accountController.updateAccount)
                        .delete( accountController.deleteAccount)


module.exports = router
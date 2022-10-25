const router = require( 'express').Router()
const transactionController = require( '../controllers/transaction.controller')
const { validateToken } = require( '../../middlewares/auth')

router.route( '/').post( validateToken, transactionController.createTransaction)

router.route( '/:_id').get( validateToken, transactionController.getTransaction)

module.exports = router
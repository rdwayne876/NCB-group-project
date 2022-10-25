const router = require( 'express').Router()
const transferController = require( '../controllers/transfer.controller')
const { validateToken } = require( '../../middlewares/auth')

router.route( '/').post( validateToken, transferController.createTransfer)

module.exports = router
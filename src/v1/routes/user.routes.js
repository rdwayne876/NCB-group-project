const router = require( 'express').Router()
const userController = require( '../controllers/user.controller')
const { validateToken } = require( '../../middlewares/auth')

router.route( '/:_id').post( validateToken, userController.updateUser)

module.exports = router
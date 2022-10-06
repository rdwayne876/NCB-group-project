const router = require( "express").Router()
const authController = require( '../controllers/auth.controller')

/**
 * @openapi
 *
 */
router.route( '/register').post( authController.registerUser)
router.post( '/login').post( authController.login)

module.exports = router
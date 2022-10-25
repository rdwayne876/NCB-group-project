const router = require( "express").Router()
const authController = require( '../controllers/auth.controller')

/**
 * @openapi
 * /api/v1/auth/register:
 *  post:
 *      summary: Register a new user
 *      tags:
 *          - Auth
 *      
 * 
 */
router.route( '/register').post( authController.registerUser)
router.route( '/login').post( authController.login)

module.exports = router
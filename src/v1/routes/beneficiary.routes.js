const router = require( 'express').Router()
const beneficiaryController = require( '../controllers/beneficiary.controller')
const { validateToken } = require( '../../middlewares/auth')

router.route( '/').post( validateToken, beneficiaryController.createBeneficiary)

router.route( '/:_id').get( validateToken, beneficiaryController.getBeneficiary)
                        .patch( validateToken, beneficiaryController.updateBeneficiary)
                        .delete( validateToken, beneficiaryController.deleteBeneficiary)

module.exports = router
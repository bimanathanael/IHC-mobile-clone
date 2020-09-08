const router = require('express').Router()
const mainController = require('../controllers/mainController')

router.get('/doctors', mainController.viewAllDoctors)
router.get('/types', mainController.viewTypes)
router.get('/specialties', mainController.viewSpecialties)
router.get('/diseases', mainController.viewDiseasesSpecialties)
router.get('/practiceTimes', mainController.viewDoctorPracticeTimes)



module.exports = router
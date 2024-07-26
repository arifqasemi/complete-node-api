const express = require('express')
const paymentController = require('../controllers/payment')
const router = express.Router();

router.post('/home',paymentController.post)
router.get('/test',paymentController.get)


module.exports = router
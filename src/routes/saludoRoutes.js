const express = require('express');
const router = express.Router();
const { saludo }= require('../controllers/saludoControllers');

router.get ('/saludo', saludo);

module.exports = router;
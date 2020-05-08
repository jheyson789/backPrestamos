'use strict'

var express = require('express');
var ProjectController = require('../controllers/prestamo.controller');

var router = express.Router();

router.get('/mostrar-prestamos', ProjectController.mostrarPrestamos);
router.post('/save-project', ProjectController.saveProject);
router.get('/mostrar-prestamo/:id', ProjectController.mostrarPrestamo);
module.exports = router;
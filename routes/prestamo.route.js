'use strict'

var express = require('express');
var ProjectController = require('../controllers/prestamo.controller');

var router = express.Router();

router.get('/mostrar-prestamos', ProjectController.mostrarPrestamos);
router.post('/save-project', ProjectController.saveProject);
router.get('/mostrar-prestamo/:id', ProjectController.mostrarPrestamo);
router.delete('/eliminar-prestamo/:id', ProjectController.eliminarPrestamo);
router.get('/test', ProjectController.test);
router.get('/mostrar-test/:id', ProjectController.mostrarTest);
router.post('/guardar-test', ProjectController.guardarTest);
module.exports = router;
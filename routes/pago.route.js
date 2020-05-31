const express = require('express');

var PagoController = require('../controllers/pago.controller');

var route = express.Router();

route.get('/mostrar-pagos/:id', PagoController.mostrar);
route.put('/pago-efectuado/:id', PagoController.pagoRealizado);
route.delete('/eliminar-pago/:id', PagoController.eliminarPago);

module.exports = route;
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrestamoSchema = Schema({
  nombre: String,
  carnetIdentidad: String,
  extension: String,
  telefono: Number,
  celular: Number,
  codigoCliente: String,
  codigoContrato: String,
  capital:Number,
  interes: Number,
  seguro: Number,
  fechaActual: String,
  fechaVencimiento: String,
  prendas : [{
    descripcion: String,
    kilate: String,
    peso: String,
    observacion: String
  }]
});

module.exports = mongoose.model('prestamo', PrestamoSchema);
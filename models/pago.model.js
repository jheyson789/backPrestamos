const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PagoSchema = Schema({
  
  pagos: [{
    fechaPago: String,
    saldoAnterior: String,
    interes: String,
    pago: String,
    saldoTotal: String
  }]
})

module.exports  = Pago = mongoose.model('pago', PagoSchema);
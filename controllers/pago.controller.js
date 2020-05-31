var Pago = require('../models/pago.model');


var controller = {
  mostrar: function(req, res) {
    const pagoId = req.params.id;
    Pago.findById(pagoId)
      .exec((err, data) => {
        if(err) return res.status(500).send({message: "Error en la petición"});
        if(!data) return res.status(404).send({message: "No se encontro los datos"});
        return res.status(200).send(data);
      })    
    
  },
  pagoRealizado: function(req, res) {
    const pagoId = req.params.id;
    var datosNuevos = req.body;

    Pago.findByIdAndUpdate(pagoId, datosNuevos, (err, datosActualizados) => {
      if(err) return res.status(500).send({message: 'Error al actualizar los datos'});
			if(!datosActualizados) return res.status(404).send({message: 'No existe el proyecto para actualizar'});
			return res.status(200).send(datosActualizados);
    })
  },
  eliminarPago: function(req,res) {
    var pagoId = req.params.id;
    Pago.findByIdAndDelete(pagoId,(err, pagos) => {
      if(err) return res.status(500).send({message: "Error en la base de datos"});
      if(!pagos) return res.status(404).send({message: "No se encontro el Pago"});
      return res.status(200).send({message: "Se elimino Correctamente"});
    })
  }

}

module.exports = controller;
'use strict'

var Prestamo = require('../models/prestamo.model');


var controller = {
  home: function(req, res) {
    return res.status(200).send({
      message: 'Inicio de la aplicación'
    });
  },
  test: function(req, res) {
    return res.status(200).send({
      message: "Test de prueba de funcionamiento"
    });
  },
  saveProject: function(req, res) {
    var prestamo = new Prestamo();

    var params = req.body;
    prestamo.nombre = params.nombre;
    prestamo.carnetIdentidad = params.carnetIdentidad;
    prestamo.extension = params.extension;
    prestamo.telefono = params.telefono;
    prestamo.celular = params.celular;
    prestamo.codigoCliente = params.codigoCliente;
    prestamo.codigoContrato = params.codigoContrato;
    prestamo.capital = params.capital;
    prestamo.interes = params.interes;
    prestamo.seguro = params.seguro;
    prestamo.fechaActual = params.fechaActual;
    prestamo.fechaVencimiento = params.fechaVencimiento;
    prestamo.prendas = params.prendas;

    
    // console.log(prestamo);
    // return;

    prestamo.save(( err, data ) => {
      if (err) return res.status(500).send({message: "Error al guardar el documento",err});
      if(!data) return res.status(404).send({message: "No se pudo guardar el proyecto"});
      return res.status(200).send({prestamos: data});
    });
  },
  mostrarPrestamos: function(req, res) {
    Prestamo.find({})
      .exec((err, data) => {
        if (err) return res.status(500).send({message: "Error en la petición"});
        Prestamo.countDocuments({},(err, total) => {
          return res.status(200).send({total ,prestamos: data});
        })
      })
  },
  mostrarPrestamo: function(req, res) {
    var prestamoId = req.params.id;
    if (prestamoId == null) {
      return res.status(404).send({message: 'Debe llenar el ID'});
    }
    Prestamo.findById(prestamoId, (err, prestamo) => {
      if (err) return res.status(500).send({message: 'Error al devolver los datos'});
      if (!prestamo) return res.status(404).send({message: 'No se encontro el prestamo'});
      return res.status(200).send({prestamo});
    });
  },
  eliminarPrestamo: function(req, res) {
    var prestamoId = req.params.id;
    if (prestamoId == null) {
      return res.status(404).send({message: 'Debe llenar el ID'});
    }
    Prestamo.findByIdAndDelete(prestamoId,(err, prestamo)=> {
      if (err) return res.status(500).send({message: 'Error al encontrar el id'});
      if (!prestamo) return res.status(404).send({message: 'No se encontro el id del prestamo'});
      return res.status(200).send({message: 'Se elimino correctamente'});
    })
  }

  
};

module.exports = controller;
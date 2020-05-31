'use strict'

var Prestamo = require('../models/prestamo.model');
var Pago = require('../models/pago.model');


var controller = {
  home: function(req, res) {
    return res.status(200).send({
      message: 'Inicio de la aplicación'
    });
  },
  test: function(req, res) {
    let nuevoPago = new Pago({pagos: [
      {fechaPago: '06/06/06',saldoAnterior: '1700', interes:'180', pago:'180', saldoActual:'1700'},
      {fechaPago: '07/07/06',saldoAnterior: '1700', interes:'180', pago:'380', saldoActual:'1500'}
    ]});
    nuevoPago.save().then(dataPago => {
      console.log(dataPago);
      let nuevoPrestamo = new Prestamo({
        pagos: dataPago._id,
        nombre: 'jhey',
        carnetIdentidad: '3165',
        extension: 'cb',
        telefono: '541654',
        celular: '15654',
        codigoCliente:'asd',
        codigoContrato: '35165sa',
        capital: '1700',
        seguro: '3.5',
        interes: '3',
        fechaActual: '06/06/06',
        fechaVencimiento: '05/05/05',
        prendas: [{
          descripcion: 'anillo de oro',
          kilate: '18',
          peso: '5.6',
          observacion: 'ninguno'
        }]
      });
      nuevoPrestamo.save().then(datoPres => {
        console.log(datoPres);
      })
    })
  },
  guardarTest: function(req, res) {
    var prestamo = new Prestamo();
    var pagos = new Pago();
    const params = req.body;
    pagos.save().then(dataPago => {
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
      prestamo.pagos = dataPago._id;
      prestamo.save(( err, data ) => {
        if (err) return res.status(500).send({message: "Error al guardar el documento",err});
        if(!data) return res.status(404).send({message: "No se pudo guardar el proyecto"});
        return res.status(200).send({prestamos: data});
      });
    });
  },
  saveProject: function(req, res) {
    var prestamo = new Prestamo();
    console.log(prestamo.pagos);

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
    prestamo.pagos = params.pagos;

    
    // console.log(prestamo);
    // return;

    prestamo.save(( err, data ) => {
      if (err) return res.status(500).send({message: "Error al guardar el documento",err});
      if(!data) return res.status(404).send({message: "No se pudo guardar el proyecto"});
      return res.status(200).send({prestamos: data});
    });
  },
  mostrarTest: function(req, res) {
    const prestamoId = req.params.id;

    Prestamo.findById(prestamoId)
      .exec((err, data) => {
        if(err) return res.status(500).send({err});
        return res.status(200).send(data);
      })
  },
  mostrarPrestamos: function(req, res) {
    Prestamo.find({}).populate('pagos')
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
      return res.status(200).send(prestamo);
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
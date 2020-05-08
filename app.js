
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

//Cargar archivos rutas
var project_routes = require('./routes/prestamo.route');

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Configurar cabeceras y cors
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});


// Rutas
app.use('/api', project_routes);


// Exportar
module.exports = app;

/* 
{
  "nombre": "mideth",
  "carnetIdentidad": "947285580",
  "extension": "cb",
  "telefono": "4561561",
  "celular": "759608006",
  "codigoCliente": "asda65",
  "codigoContrato": "dfg4156g",
  "capital": "1500",
  "interes": "3",
  "seguro": "3.5",
  "fechaActual": "6/6/2020",
  "prendas": [{
   "descripcion": "uno",
   "kilate": "18",
   "peso": "5.52",
   "observacion": "ninguno"
  },
  {
   "descripcion": "anillo",
   "kilate": "18",
   "peso": "5.52",
   "observacion": "nuevo"
  }]
}

*/
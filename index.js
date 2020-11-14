require('./config');
const mongoose = require('mongoose');
const app = require('./app');
const urlDB = 'mongodb://localhost:27017/prestamos';


mongoose.Promise = global.Promise;
mongoose.connect(urlDB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then( () => {
    console.log('Se conecto a la base de datos Correctamente');

    //Creación del servidor
    app.listen( process.env.PORT , () => {
      console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    });

    const WebSocket = require ('ws');

    var reconnectInterval  = 1000 * 10
    // var ws;

    var connect = function(){
    console.log('corriendo');                
    var ws = new WebSocket ('wss://marketdata.tradermade.com/feed');
    console.log(`{"userKey":"wsTimxVxcnGuuXLC-77w", "symbol": "GBPUSD"}`);

    ws.on('open', function open() {
      console.log('peticion');
      ws.send(`{"userKey":"wsTimxVxcnGuuXLC-77w", "symbol": "GBPUSD"}`);
    });

    ws.on('close', function() {
      console.log('socket close : will reconnect in ' + reconnectInterval );
      setTimeout(connect, reconnectInterval)
    });

    ws.on('message', function incoming(data) {
      console.log(data);
    });
    };
    connect();
  })
  .catch(err => console.log(err));
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
  })
  .catch(err => console.log(err));
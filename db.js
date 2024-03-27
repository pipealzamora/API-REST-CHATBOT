const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//conexion a la base de datos
const mongoDBConnectionString = process.env.MONGODB_URI;
mongoose.connect(mongoDBConnectionString);

const db = mongoose.connection;

//error al conectar
db.on('error', console.error.bind(console, 'error al conectar a la bases de datos:'));

//exito al conectar
db.once('open', () => {
  console.log('Conectado a la base de datos de mongodb');
});

module.exports = mongoose;

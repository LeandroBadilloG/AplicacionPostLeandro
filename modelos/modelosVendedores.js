const mongoose = require('../configuracion/conexionBD');


const schemaVendedor = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    require: true
  },
  documentoUsuario: {
    type: Number,
    require: true
  },
  correoUsuario: {
    type: String,
    require: true
  },
  contraseñaUsuario: {
    type: String,
    require: true
  },
  rol: {
    type: String
  }

});

const nuevoVendedor = mongoose.model('vendedores', schemaVendedor);
module.exports = nuevoVendedor;

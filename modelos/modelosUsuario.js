const mongoose = require('../configuracion/conexionBD');

const schemaUsuario = new mongoose.Schema({
  nombreUsuario: {
    type: String
  },
  apellidosUsuario: {
    type: String
  },
  telefonoUsuario: {
    type: Number,
    unique: true,
    min: 10
  },
  documentoUsuario: {
    type: Number,
    unique: true
  },
  ubicacionUsuario: {
    type: String,
    min: 10
  },
  correoUsuario: {
    type: String
  },
  contraseñaUsuario: {
    type: String
  },
  rol: {
    type: String
  }
}, {
  // crea una variable mas al modelo con la informacion de cuando fue creado o cuando fue ctualizado la ultima vez
  timestamps: true
});
const nuevoUsuario = mongoose.model('usuarios', schemaUsuario);
module.exports = nuevoUsuario;

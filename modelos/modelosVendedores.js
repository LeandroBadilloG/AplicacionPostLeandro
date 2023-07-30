const { default: mongoose } = require("mongoose");

const coneccion = require('../configuracion/conexionBD');
const nuevoUsuario = require("./modelosUsuario");

const schemaVendedor = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    documento: {
        type: Number,
        require: true,
    },
    correo: {
        type: String,
        require: true,
    },
    contraseña: {
        type: String,
        require: true,
    },
    rol:{
        type:String,
    }

})



const nuevoVendedor = mongoose.model('vendedores', schemaVendedor);
module.exports = nuevoVendedor;
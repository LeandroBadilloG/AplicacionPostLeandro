const { default: mongoose } = require("mongoose");

const coneccion = require('../configuracion/conexionBD');
const nuevoUsuario = require("./modelosUsuario");

const schemaVendedor = new mongoose.Schema({
    nombreVendedor: {
        type: String,
        require: true,
    },
    documentoVendedor: {
        type: Number,
        require: true,
    },
    correoVendedor: {
        type: String,
        require: true,
    },
    contraseñaVendedor: {
        type: String,
        require: true,
    }

})



const nuevoVendedor = mongoose.model('vendedores', schemaVendedor);
module.exports = nuevoVendedor;
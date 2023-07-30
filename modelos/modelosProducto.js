const { default: mongoose } = require("mongoose");

const coneccion = require('../configuracion/conexionBD')

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: String,
        require: true,
    },
    nombre: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    precio: {
        type: Number,
        require: true,
    },
    habilitado: {
        type: Boolean,
        require: true
    },
    imagenUrl: {
        type: String,
        require: true,
    },
})

const nuevoProducto = mongoose.model('productos', schemaProducto)
module.exports = nuevoProducto;
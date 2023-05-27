const { default: mongoose } = require("mongoose");

const coneccion  = require('../configuracion/coneccionBD')

const schemaProducto = new mongoose.Schema({
    categoriaProducto:{
        type:String,
        require:true,   
    },
    nombreProducto:{
        type:String,
        require:true,
    },
    descripcionProducto:{
        type:String,
        require:true,
    },
    precioProducto:{
        type:Number,
        require:true,
    }
})

const nuevoProducto = mongoose.model('productos',schemaProducto)
module.exports= nuevoProducto;
const { default: mongoose } = require("mongoose");

const coneccion  = require('../configuracion/conexionBD');

const schemaVenta = new mongoose.Schema({
    _id:{
        type:String,
        require: true,
    },
    nombreProducto:{
        type:String,
        require:true,
    },
    precioProducto:{
        type:Number,
        require:true,
    }
});

const nuevoVenta = mongoose.model('Ventas',schemaVenta);
module.exports=nuevoVenta;


const mongoose = require('../configuracion/conexionBD');

const schemaVenta = new mongoose.Schema({
vendedor:{
    type: String
},

cliente:[
    {
        'id':{
            type: String
        },
        'nombreUsuario': {
            type: String
          },
          'apellidosUsuario': {
            type: String
          },
          'telefonoUsuario': {
            type: Number,
            min: 10
          },
          'documentoUsuario': {
            type: Number,
          },
          'ubicacionUsuario': {
            type: String,
            min: 10
          },
          'correoUsuario': {
            type: String
          } 

    }
],

productos:[
    {
        'id':{
            type: String,
        },
        'nombre': {
            type: String,
          },
          'descripcion': {
            type: String,
          },
          'stock': {
            type: Number,
          },
          'precio': {
            type: Number,
          },
    }
],

totalCompra:{

}

});

const nuevaVenta = mongoose.model('Ventas', schemaVenta);
module.exports = nuevaVenta;

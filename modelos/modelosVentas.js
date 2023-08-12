const { default: mongoose } = require("mongoose");

const coneccion = require('../configuracion/conexionBD');

const schemaVenta = new mongoose.Schema({
    vendedor: {
        type: String,
        require: true,
    },
    productos: [
        {
          producto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Producto'
          },
          cantidad: Number
        }
      ],

    valorTotal: {
        type: Number,
        require:true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
      },
    metodoPago:{
        type: String
    },
    fechaVenta: {
        
        require:true
    }

});

const nuevoVenta = mongoose.model('Ventas', schemaVenta);
module.exports = nuevoVenta;

const carritoSchema = new mongoose.Schema({
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario'
    },
    productos: [
      {
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Producto'
        },
        cantidad: Number
      }
    ]
  });
const usuario = require('../modelos/modelosUsuario');
const vendedor = require('../modelos/modelosVendedores');
const compra = require('../modelos/modelosVentas');

exports.datosCompra=(req,res)=>{
    res.render('../vistas/parciales/datosCompra');
}
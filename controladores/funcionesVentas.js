const usuario = require('../modelos/modelosUsuario');
const vendedor = require('../modelos/modelosVendedores');
const compra = require('../modelos/modelosVentas');

exports.datosCompra = async (req, res) => {
  res.render('../vistas/parciales/datosCompra', {
    rol: req.cookies.rol,
    usuario: await usuario.findOne({ _id: req.cookies.usuario }),
    vendedor: await vendedor.findOne({ _id: req.cookies.usuario })
  });
};

exports.guardarCompra = async (req, res) => {
  // const venta = new compra({
    
  // });
  // await venta.save();
  console.log(req.body);
  res.send('listo');
};

const vendedores = require('../modelos/modelosVendedores');


exports.formVendedores = (req, res) => {
  res.render('vendedores/formVendedor')
}

exports.listaVendedores = async (req, res) => {
  const listaVendedores = await vendedores.find();
  res.render('vendedores/listaVendedores', {
    'vendedores': listaVendedores
  })
}

exports.nuevoVendedor = async (req, res) => {
  new vendedores({
    nombreUsuario: req.body.nombreUsuario,
    documentoUsuario: req.body.documentoUsuario,
    correoUsuario: req.body.correoUsuario,
    contraseñaUsuario: req.body.contraseñaUsuario,
    rol: req.body.rol
  }).save()

  const listaVendedores = await vendedores.find();
  res.redirect('/tienda/v1/listaVendedores')

}



exports.editarVendedor = async (req, res) => {

  await vendedores.findByIdAndUpdate(req.body.idVUsuario, {

    nombreUsuario: req.body.nombreUsuario,
    documentoUsuario: req.body.documentoUsuario,
    correoUsuario: req.body.correoUsuario,
    rol: req.body.rol

  })

  console.log(req.body)

  res.redirect('/tienda/v1/listaVendedores')
}


exports.eliminarVendedor = async (req, res) => {

  await vendedores.findByIdAndDelete({ '_id': req.body.VendedorEliminar });

  res.redirect('listaVendedores')

};
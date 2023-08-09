const vendedores = require('../modelos/modelosVendedores');
const usuario = require('../modelos/modelosUsuario');


exports.formVendedores = (req, res) => {
  res.render('vendedores/formVendedor')
}

exports.listaVendedores = async (req, res) => {
  const listaVendedores = await vendedores.find();
  res.render('vendedores/listaVendedores', {
    'vendedores': listaVendedores,
    'vendedor':await vendedores.findOne({'_id':req.cookies.usuario}),
    'rol': req.cookies.rol,
  })
}

exports.navVendedor=async(req,res)=>{
  res.render('parciales/navVendedor',{
      'vendedor':await vendedores.findOne({'_id':req.cookies.usuario})
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
  
  const nUsuario = await usuario.findOne({'correoUsuario': req.body.correoUsuario})
  console.log(nUsuario);

  res.cookie('rol', nUsuario.rol,{
    httpOnly: true,
  });
  res.cookie('usuario', nUsuario._id, {
    httpOnly: true,
  });
  res.redirect('principal')

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
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

exports.nuevoVendedor =async (req, res) => {
  new vendedores({
    nombreVendedor: req.body.nombreVendedor,
    documentoVendedor: req.body.documentoVendedor,
    correoVendedor: req.body.correoVendedor,
    contraseñaVendedor: req.body.contraseñaVendedor,
    rol:req.body.rol
  }).save()

  const listaVendedores = await vendedores.find();
  res.redirect('vendedores/listaVendedores')
  
}



exports.editarVendedor = async (req,res) =>{
  
  await vendedores.findByIdAndUpdate(req.body.idVendedor, {
    
    nombreVendedor: req.body.nombreVendedor,
    documentoVendedor: req.body.documentoVendedor,
    correoVendedor: req.body.correoVendedor,
    contraseñaVendedor: req.body.contraseñaVendedor,
    rol:req.body.rol

})

console.log(req.body)

res.redirect('listaVendedores')
}


exports.eliminarVendedor = async(req, res)=>{
  
  await vendedores.findByIdAndDelete({'_id':req.body.VendedorEliminar});
  
  res.redirect('listaVendedores')

};
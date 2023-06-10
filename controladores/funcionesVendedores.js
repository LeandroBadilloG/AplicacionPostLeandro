const vendedores = require('../modelos/modelosVendedores');


exports.formVendedores = (req, res) => {
    res.render('vendedores/formVendedor')
}

exports.registrarVendedor = (req, res) => {
    const nuevoVendedor = new vendedores({
        nombreVendedor: req.body.nombreVendedor,
        documentoVendedor: req.body.documentoVendedor,
        correoVendedor: req.body.correoVendedor,
        contraseñaVendedor: req.body.contraseñaVendedor,
    })
    nuevoVendedor.save()
    res.render('vendedores/listaVendedores');
}

exports.listaVendedores = async (req, res) => {
    const listaVendedores = await vendedores.find();
    res.render('vendedores/listaVendedores', {
        'vendedores': listaVendedores
    })
}
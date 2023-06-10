const usuario = require('../modelos/modelosUsuario');
const producto = require('../modelos/modelosProducto');
const vendedores = require('../modelos/modelosVendedores');
const ventas = require('../modelos/modelosVentas');

const xl = require('excel4node');
const path = require('path')
const fs = require('fs');


exports.paginaprincipal = (req, res) => {
    res.render('principal')
}
exports.formUsuario = (req, res) => {
    res.render('usuarios/formUsuario');
}



exports.formVendedores = (req, res) => {
    res.render('vendedores/formVendedor')
}

exports.inicioSesion = (req, res) => {
    res.render('usuarios/inicioSesion')
}





exports.listaVendedores = async (req, res) => {
    const listaVendedores = await vendedores.find();
    res.render('vendedores/listaVendedores', {
        'vendedores': listaVendedores
    })
}


exports.cookies = (req, res) => {
    res.cookie('Nombre', 'cookie').send('lista la cookie');
}

exports.nuevoUsuario = (req, res) => {

    const nuevoUsuario = new usuario({
        nombreUsuario: req.body.nombreUsuario,
        apellidosUsuario: req.body.apellidoUsuario,
        telefonoUsuario: req.body.telefonoUsuario,
        ubicacionUsuario: req.body.direccionUsuario,
        correoUsuario: req.body.correoUsuario,
        contraseñaUsuario: req.body.contraseñaUsuario,
    })
    nuevoUsuario.save();
    console.log(req.body)
    res.redirect('principal')
}

exports.autenticarUsuario = async (req, res) => {
    const correo = req.body.correoUsuario;
    const contraseña = req.body.contraseñaUsuario;
    console.log(correo);
    const buscarUsuario = await usuario.findOne({ "correoUsuario": correo });
    console.log(buscarUsuario);
    if (buscarUsuario.contraseñaUsuario == contraseña) {
        res.send('inicio sesion');
    } else {
        res.send('ERROR')
    }
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

exports.agregarAlCarrito = (req, res) => {

}


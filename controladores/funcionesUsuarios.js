const usuario = require('../modelos/modelosUsuario');


exports.paginaprincipal = (req, res) => {
    res.render('principal')
}

exports.formUsuario = (req, res) => {
    res.render('usuarios/formUsuario');
}

exports.inicioSesion = (req, res) => {
    res.render('usuarios/inicioSesion')
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

exports.agregarAlCarrito = (req, res) => {

}

exports.cookies = (req, res) => {
    res.cookie('Nombre', 'cookie').send('lista la cookie');
}



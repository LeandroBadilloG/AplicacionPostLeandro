const usuario = require('../modelos/modelosUsuario');
const nodemailer = require('nodemailer');


exports.paginaprincipal = (req, res) => {
    res.render('principal')
}

exports.enviarCorreo = (req, res)=>{
    const texto = req.body.textarea1;
    console.log(req.body)
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ljbadillo7@misena.edu.co',
        pass: 'npqwcrkftjkqgafg'
      }
    });

    var mailOptions = {
      from: 'ljbadillo7@misena.edu.co',
      to: 'ljbadillo7@misena.edu.co',
      subject: 'Sending Email using Node.js',
      text: texto,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
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
    // const arr = [1,2,3];
    // res.cookie('Leandro',{arr}).send('lista la cookie');
    
    const { idProducto } = req.params;

    // Obtén el carrito actual de las cookies
    let carrito = req.cookies.carrito || [];
  
    // Agrega el ID del producto al carrito
    carrito.push(idProducto);
  
    // Actualiza la cookie con el nuevo carrito
    res.cookie('carrito', carrito);
  
    res.send('Producto agregado al carrito');


}



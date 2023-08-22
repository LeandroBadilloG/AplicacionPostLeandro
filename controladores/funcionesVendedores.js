const vendedores = require('../modelos/modelosVendedores');
// const usuario = require('../modelos/modelosUsuario');
const nodemailer = require('nodemailer');


exports.formVendedores = (req, res) => {
  res.render('vendedores/formVendedor');
};

exports.listaVendedores = async (req, res) => {
  res.render('vendedores/listaVendedores', {
    vendedores: await vendedores.find(),
    vendedor: await vendedores.findOne({ _id: req.cookies.usuario }),
    rol: req.cookies.rol
  });
};

exports.navVendedor = async (req, res) => {
  res.render('parciales/navVendedor', {
    vendedor: await vendedores.findOne({ _id: req.cookies.usuario })
  });
};

exports.nuevoVendedor = async (req, res) => {
  const nuevoV = new vendedores({
    nombreUsuario: req.body.nombreUsuario,
    documentoUsuario: req.body.documentoUsuario,
    correoUsuario: req.body.correoUsuario,
    contraseñaUsuario: req.body.contraseñaUsuario,
    rol: req.body.rol
  });
  await nuevoV.save();

  res.cookie('rol', nuevoV.rol, {
    httpOnly: true
  });
  res.cookie('usuario', nuevoV._id, {
    httpOnly: true
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ljbadillo7@misena.edu.co',
      pass: `${process.env.D_PCORREO}`
    }
  });

  const mailOptions = {
    from: 'ljbadillo7@misena.edu.co',
    to: nuevoV.correoUsuario,
    subject: 'Registro de Vendedor Exitoso',
    text: `Bienveni@ ${nuevoV.nombreUsuario} 😊`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.redirect('/');
};

exports.editarVendedor = async (req, res) => {
  await vendedores.findByIdAndUpdate(req.body.idVUsuario, {

    nombreUsuario: req.body.nombreUsuario,
    documentoUsuario: req.body.documentoUsuario,
    correoUsuario: req.body.correoUsuario,
    rol: req.body.rol

  });

  console.log(req.body);

  res.redirect('/listaVendedores');
};

exports.eliminarVendedor = async (req, res) => {
  await vendedores.findByIdAndDelete({ _id: req.body.VendedorEliminar });

  res.redirect('listaUsuarios');
};

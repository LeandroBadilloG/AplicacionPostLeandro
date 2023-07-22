const usuario = require('../modelos/modelosUsuario');
const compra = require('../modelos/modelosVentas');
const nodemailer = require('nodemailer');
const multer = require('multer')

const { body, validationResult } = require('express-validator');

exports.paginaprincipal = async (req, res) => {
  const productos = await compra.find()
  res.render('principal', {
    'productos': productos
  })
}

exports.enviarCorreo = (req, res) => {
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



exports.nuevoUsuario = async (req, res) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    console.log(req.body)
    const valores = req.body
    const validaciones = errors.array()
    res.render('usuarios/formUsuario', { validaciones: validaciones, valores: valores })
  } else {
    const nuevoUsuario = new usuario({
      nombreUsuario: req.body.nombreUsuario,
      apellidosUsuario: req.body.apellidoUsuario,
      telefonoUsuario: req.body.telefonoUsuario,
      ubicacionUsuario: req.body.direccionUsuario,
      correoUsuario: req.body.correoUsuario,
      contraseñaUsuario: req.body.contraseñaUsuario,
      rol:req.body.rol,
    })
    nuevoUsuario.save();
    res.redirect('principal')
  }
}


exports.autenticarUsuario = async (req, res) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    console.log(req.body)
    const valores = req.body
    const validaciones = errors.array()
    res.render('usuarios/inicioSesion', { validaciones: validaciones, valores: valores })
  } else {

    const correo = req.body.correoUsuario;

    const contraseña = req.body.contraseñaUsuario;

    const buscarUsuario = await usuario.findOne({ "correoUsuario": correo });

    if (buscarUsuario.contraseñaUsuario == contraseña) {
      res.send('inicio sesion');
    }
    else {
      res.send('ERROR');
    }

  }

}

exports.listaUsuarios = async (req, res) => {
  const listaUsuarios = await usuario.find();
  res.render('usuarios/listaUsuarios', {
    "usuarios": listaUsuarios,
  })
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


exports.subirArchivo = (req, res) => {
  const storage = multer.diskStorage({
    //ruta en la cual se guardan los documentos subidos 
    destination: './documentos',

    //configuramos el nombre del archibo guardado y identificamos la extencion del documento suvido 
    filename: function (req, file, cb) {
      //Tomamos el nombre original del documento y le ponesmos el mismo nombre
      //cortamos en el ultimo punto del nombre del documento para identificar el archivo
      var extencion = file.originalname.slice(file.originalname.lastIndexOf('.'));
      //definimos el nombre con el cual se guradara el documento y la extencion
      cb(null, Date.now() + extencion);
    }
  })
  console.log('exitoso')
  multer({ storage: storage }).single('file');
  console.log(multer);
  res.send('listo')

}

exports.editarUsuario = async (req,res) =>{
  
  await usuario.findByIdAndUpdate(req.body.id, {

    nombreUsuario: req.body.nombreUsuario,

    apellidosUsuario: req.body.apellidoUsuario,

    telefonoUsuario: req.body.telefonoUsuario,

    ubicacionUsuario: req.body.direccionUsuario,

    correoUsuario: req.body.correoUsuario,
    
    contraseñaUsuario: req.body.id,

})

console.log(req.body)

res.redirect('listaUsuarios')
}



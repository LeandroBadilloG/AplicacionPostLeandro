const usuario = require('../modelos/modelosUsuario');
const vendedor = require('../modelos/modelosVendedores');
const compra = require('../modelos/modelosVentas');
const nodemailer = require('nodemailer');
const multer = require('multer')

const { body, validationResult } = require('express-validator');

exports.navbar =async (req, res) => {
  
  res.render('parciales/navCliente',{
    'usuario':await usuario.findOne({'_id':req.cookies.usuario})
  });
  
}

exports.paginaprincipal = async (req, res) => {
  res.render('principal', {
    'rol': req.cookies.rol,
    'usuario':await usuario.findOne({'_id':req.cookies.usuario})
  });
}



// recuperar contraseña
exports.formContraseña = (req, res) => {
  res.render('usuarios/recuperarContraseña')
}

exports.enviarContraseña = async (req, res) => {
  const correo = req.body.correoUsuario;
  const usuarion = await usuario.findOne({ 'correoUsuario': correo });

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ljbadillo7@misena.edu.co',
      pass: `${process.env.D_PCORREO}`,
    }
  });

  var mailOptions = {
    from: 'ljbadillo7@misena.edu.co',
    to: correo,
    subject: 'Recuperacion de contraseña',
    text: `Para cambiar la contraseña entra en :  http://localhost:5900/tienda/v1/cambioContrasena/${usuarion._id}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send('ya')
}

exports.cambioContraseña = async (req, res) => {

  const usuarios = await usuario.findOne({ '_id': req.params.id });

  res.render('usuarios/cambioContraseña', {

    "usuario": usuarios,

  });
}

exports.nuevaContraseña = async (req, res) => {

  await usuario.findByIdAndUpdate(req.body.id, {
    contraseñaUsuario: req.body.confirmarnuevaContraseña
  });

  res.redirect('listaUsuarios');
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
      documentoUsuario: req.body.documentoUsuario,
      ubicacionUsuario: req.body.direccionUsuario,
      correoUsuario: req.body.correoUsuario,
      contraseñaUsuario: req.body.contraseñaUsuario,
      rol: req.body.rol
    })
    nuevoUsuario.save();

  }
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

    const buscarCliente = await usuario.findOne({ "correoUsuario": correo });

    if (buscarCliente === null) {

      const buscarVendedor = await vendedor.findOne({ "correoUsuario": correo });

      if (buscarVendedor === null) {
        res.send('no se encontro el usuario')

      } else if (buscarVendedor.contraseñaUsuario === contraseña) {
        res.cookie('usuario', `${buscarVendedor._id}`, {
          httpOnly: true,
        });
        res.cookie('rol', `${buscarVendedor.rol}`, {
          httpOnly: true,
        });
        
        res.redirect('principal');
      }
    } else if (buscarCliente.contraseñaUsuario === contraseña) {
      res.cookie('usuario', `${buscarCliente._id}`, {
        httpOnly: true,
      });
      res.cookie('rol', `${buscarCliente.rol}`, {
        httpOnly: true,
      });

      res.redirect('principal');
    } else {
      res.send('no se encontro el usuario')
    }
  }
}

exports.listaUsuarios = async (req, res) => {
  res.render('usuarios/listaUsuarios', {
    "clientes": await usuario.find(), 
    "vendedores": await vendedor.find(),
    'rol': req.cookies.rol,
    'usuario':await usuario.findOne({'_id':req.cookies.usuario})
  })
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

exports.editarUsuario = async (req, res) => {

  await usuario.findByIdAndUpdate(req.body.idUsuario, {
    nombreUsuario: req.body.nombreUsuario,
    apellidosUsuario: req.body.apellidoUsuario,
    telefonoUsuario: req.body.telefonoUsuario,
    ubicacionUsuario: req.body.direccionUsuario,
    documentoUsuario: req.body.documentoUsuario,
    correoUsuario: req.body.correoUsuario,
  })

  res.redirect('listaUsuarios')
}

exports.eliminarUsuario = async (req, res) => {

  await usuario.findByIdAndDelete({ '_id': req.body.usuarioEliminar });

  res.redirect('listaUsuarios')

};



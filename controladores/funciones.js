const modelos = require('../modelos/modelosDatos');

exports.paginaprincipal=(req, res)=>{
    res.render('principal')
}
exports.formularioregistrar=(req,res)=>{
    res.render('registroUsuario');
}



exports.nuevoUsuario=(req,res)=>{
    
    const nuevoUsuario = new modelos ({
        nombreUsuario: req.body.nombreUsuario,
        apellidosUsuario:req.body.apellidoUsuario,
        telefonoUsuario:req.body.telefonoUsuario,
        ubicacionUsuario:req.body.direccionUsuario,
        correoUsuario:req.body.correoUsuario,
        contraseñaUsuario:req.body.contraseñaUsuario,
    })
    nuevoUsuario.save();
    console.log(req.body)
    res.redirect('/tienda/v1/principal')   
}

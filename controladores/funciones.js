const modelos = require('../modelos/modelosDatos')

exports.paginaprincipal=(req, res)=>{
    res.render('principal')
}
exports.formularioregistrar=(req,res)=>{
    res.render('registroUsuario');
}
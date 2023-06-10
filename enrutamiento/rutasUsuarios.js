const funciones = require('../controladores/funcionesUsuarios');
const express =require('express');
const router = express.Router();

router.get('/principal',funciones.paginaprincipal);
router.get('/formUsuario',funciones.formUsuario);
router.post('/registrarUsuario',funciones.nuevoUsuario);
router.post('/autenticarUsuario',funciones.autenticarUsuario);
router.get('/inicioSesion',funciones.inicioSesion);
router.get('/agregarCarrito',funciones.agregarAlCarrito);
router.get('/cookie',funciones.cookies);

router.post('/enviarCorreo',funciones.enviarCorreo);

module.exports=router;
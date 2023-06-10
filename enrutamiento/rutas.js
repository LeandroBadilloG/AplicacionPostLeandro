const funciones = require('../controladores/funciones');
const express =require('express');
const router = express.Router();

router.get('/principal',funciones.paginaprincipal);

//rutas Usuarios
router.get('/formUsuario',funciones.formUsuario);
router.post('/registrarUsuario',funciones.nuevoUsuario);
router.post('/autenticarUsuario',funciones.autenticarUsuario);



//rutas Vendedores
router.get('/formVendedor',funciones.formVendedores);
router.get('/listaVendedores',funciones.listaVendedores);
router.post('/registrarVendeodor',funciones.registrarVendedor);


//rutas Inicio de sesión 
router.get('/inicioSesion',funciones.inicioSesion);

//rutas Carrito
router.get('/agregarCarrito',funciones.agregarAlCarrito);

//cookie
router.get('/cookie',funciones.cookies);

module.exports=router;
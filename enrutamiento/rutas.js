const funciones = require('../controladores/funcionesProductos');
const funcionesUsuarios = require('../controladores/funcionesUsuarios');
const funcionesVendedores = require('../controladores/funcionesVendedores');


const express =require('express');
const router = express.Router();

//Productos
router.get('/formProducto',funciones.formProducto);
router.get('/listaProductos',funciones.listaproductos);
router.get('/catalogoProductos',funciones.catalogoProductos);
router.get('/descargarExcel',funciones.descargarExcel);
router.get('/grafica',funciones.grafica);
router.post('/cookiesProducto',funciones.cookiesProductos);
router.post('/registrarProducto',funciones.nuevoProducto);
router.post('/actualizarProducto',funciones.actualizarProducto);


//usuarios
router.get('/principal',funcionesUsuarios.paginaprincipal);
router.get('/formUsuario',funcionesUsuarios.formUsuario);
router.get('/listaUsuarios',funcionesUsuarios.listaUsuarios);
router.get('/inicioSesion',funcionesUsuarios.inicioSesion);
router.get('/cookie',funcionesUsuarios.cookies);
router.post('/enviarCorreo',funcionesUsuarios.enviarCorreo);
router.post('/subirArchivo',funcionesUsuarios.subirArchivo);
router.post('/registrarUsuario',funcionesUsuarios.nuevoUsuario);
router.post('/autenticarUsuario',funcionesUsuarios.autenticarUsuario);


//vendedores
router.get('/formVendedor',funcionesVendedores.formVendedores);
router.get('/listaVendedores',funcionesVendedores.listaVendedores);
router.post('/registrarVendeodor',funcionesVendedores.registrarVendedor);

module.exports=router;
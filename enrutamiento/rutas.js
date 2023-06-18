const funciones = require('../controladores/funcionesProductos');
const funcionesUsuarios = require('../controladores/funcionesUsuarios');
const funcionesVendedores = require('../controladores/funcionesVendedores');


const express =require('express');
const router = express.Router();

//Productos
router.get('/formProducto',funciones.formProducto);
router.get('/listaProductos',funciones.listaproductos);
router.get('/catalogoProductos',funciones.catalogoProductos);
router.post('/registrarProducto',funciones.nuevoProducto);
router.post('/actualizarProducto',funciones.actualizarProducto);
router.get('/descargarExcel',funciones.descargarExcel);
router.post('/carrito',funciones.carrito);
router.get('/grafica',funciones.grafica);

//usuarios
router.get('/principal',funcionesUsuarios.paginaprincipal);
router.get('/formUsuario',funcionesUsuarios.formUsuario);
router.post('/registrarUsuario',funcionesUsuarios.nuevoUsuario);
router.post('/autenticarUsuario',funcionesUsuarios.autenticarUsuario);
router.get('/inicioSesion',funcionesUsuarios.inicioSesion);
router.get('/agregarCarrito',funcionesUsuarios.agregarAlCarrito);
router.get('/cookie',funcionesUsuarios.cookies);
router.post('/enviarCorreo',funcionesUsuarios.enviarCorreo);
router.post('/subirArchivo',funcionesUsuarios.subirArchivo)

//vendedores
router.get('/formVendedor',funcionesVendedores.formVendedores);
router.get('/listaVendedores',funcionesVendedores.listaVendedores);
router.post('/registrarVendeodor',funcionesVendedores.registrarVendedor);

module.exports=router;
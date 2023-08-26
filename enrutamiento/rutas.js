const funciones = require('../controladores/funcionesProductos');
const funcionesUsuarios = require('../controladores/funcionesUsuarios');
const funcionesVendedores = require('../controladores/funcionesVendedores');
const funcionesVentas = require('../controladores/funcionesVentas');

const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

// Productos
router.get('/formProducto', funciones.formProducto);
router.get('/listaProductos', funciones.listaproductos);
router.get('/catalogoProductos', funciones.catalogoProductos);
router.get('/descargarExcel', funciones.descargarExcel);
router.get('/grafica', funciones.grafica);
router.post('/registrarProducto', funciones.nuevoProducto);
router.post('/actualizarProducto', funciones.actualizarProducto);
router.post('/eliminarProducto', funciones.eliminarProducto);

// usuarios
router.get('/', funcionesUsuarios.paginaprincipal);
router.get('/perfilCliente',funcionesUsuarios.perfilCliente);
router.get('/formContrasena', funcionesUsuarios.formContraseña);
router.get('/navUsuario', funcionesUsuarios.navbar);
router.get('/formUsuario', funcionesUsuarios.formUsuario);
router.get('/listaUsuarios', funcionesUsuarios.listaUsuarios);
router.get('/inicioSesion', funcionesUsuarios.inicioSesion);
router.get('/cambioContrasena/:id', funcionesUsuarios.cambioContraseña);
router.get('/cerrarSesion', funcionesUsuarios.cerrarSesion);
router.post('/enviarContrasena', funcionesUsuarios.enviarContraseña);
router.post('/actualizarUsuario',funcionesUsuarios.actuaizarUsuario);
router.post('/nuevaContrasena', funcionesUsuarios.nuevaContraseña);
router.post('/subirArchivo', funcionesUsuarios.subirArchivo);
router.post('/editarUsuario', funcionesUsuarios.editarUsuario);
router.post('/eliminarUsuario', funcionesUsuarios.eliminarUsuario);
router.post('/registrarUsuario', funcionesUsuarios.nuevoUsuario);
router.post('/autenticarUsuario', funcionesUsuarios.autenticarUsuario);

// vendedores
router.get('/formVendedor', funcionesVendedores.formVendedores);
router.get('/listaVendedores', funcionesVendedores.listaVendedores);
router.get('/navVendedor', funcionesVendedores.navVendedor);
router.post('/nuevoVendeodor', funcionesVendedores.nuevoVendedor);
router.post('/actualizarVendedor', funcionesVendedores.editarVendedor);
router.post('/eliminarVendedor', funcionesVendedores.eliminarVendedor);

// vebtas
router.get('/datosCompra', funcionesVentas.datosCompra);
router.post('/Comprar', funcionesVentas.guardarCompra);

module.exports = router;

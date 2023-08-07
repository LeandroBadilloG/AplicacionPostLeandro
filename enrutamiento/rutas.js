const funciones = require('../controladores/funcionesProductos');
const funcionesUsuarios = require('../controladores/funcionesUsuarios');
const funcionesVendedores = require('../controladores/funcionesVendedores');
const funcionesVentas = require('../controladores/funcionesVentas');


const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');


//Productos
router.get('/formProducto', funciones.formProducto);
router.get('/listaProductos', funciones.listaproductos);
router.get('/catalogoProductos', funciones.catalogoProductos);
router.get('/descargarExcel', funciones.descargarExcel);
router.get('/grafica', funciones.grafica);
router.post('/cookiesProducto', funciones.cookiesProductos);
router.post('/registrarProducto', funciones.nuevoProducto);
router.post('/actualizarProducto', funciones.actualizarProducto);
router.post('/eliminarProducto', funciones.eliminarProducto);


//usuarios
router.get('/formContrasena', funcionesUsuarios.formContraseña);
router.get('/navUsuario', funcionesUsuarios.navbar);
router.get('/principal', funcionesUsuarios.paginaprincipal);
router.get('/formUsuario', funcionesUsuarios.formUsuario);
router.get('/listaUsuarios', funcionesUsuarios.listaUsuarios);
router.get('/inicioSesion', funcionesUsuarios.inicioSesion);
router.get('/cambioContrasena/:id', funcionesUsuarios.cambioContraseña);
router.post('/enviarContrasena', funcionesUsuarios.enviarContraseña);
router.post('/nuevaContrasena', funcionesUsuarios.nuevaContraseña);
router.post('/subirArchivo', funcionesUsuarios.subirArchivo);
router.post('/actualizarUsuario', funcionesUsuarios.editarUsuario);
router.post('/eliminarUsuario', funcionesUsuarios.eliminarUsuario);
router.post('/registrarUsuario', [

    body('nombreUsuario', 'Ingrese un nombre de usuario.').exists().isLength({ min: 2, max: 30 }),
    body('apellidoUsuario', 'Ingrese un apellido de usuario').exists().isLength({ min: 3, max: 50 }),
    body('telefonoUsuario', 'Ingrese un numero de telefono valido').exists().isLength({ min: 10 }),
    body('direccionUsuario', 'Ingrese un direccion de usuario').exists().isLength({ min: 5 }),
    body('documentoUsuario', 'Ingrese un documento de usuario').exists().isLength({ min: 5 }),
    body('correoUsuario', 'Ingrese un correo de usuario').exists().isEmail(),
    body('contraseñaUsuario', 'Ingrese un contraseña con un minimo 8 caracteres').exists().isLength({ min: 8 }),
], funcionesUsuarios.nuevoUsuario);

router.post('/autenticarUsuario', [
    body('correoUsuario', 'Ingresa su correo').exists().isEmail(),
    body('contraseñaUsuario', 'Ingresa la contraseña').exists().isLength({ min: 8 }),
], funcionesUsuarios.autenticarUsuario);



//vendedores
router.get('/formVendedor', funcionesVendedores.formVendedores);
router.get('/listaVendedores', funcionesVendedores.listaVendedores);
router.post('/nuevoVendeodor', funcionesVendedores.nuevoVendedor);
router.post('/actualizarVendedor', funcionesVendedores.editarVendedor);
router.post('/eliminarVendedor', funcionesVendedores.eliminarVendedor);

//vebtas
router.get('/datosCompra',funcionesVentas.datosCompra);

module.exports = router;
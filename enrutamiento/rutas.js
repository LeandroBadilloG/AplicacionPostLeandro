const funciones = require('../controladores/funciones');
const express =require('express');
const router = express.Router();

router.get('/principal',funciones.paginaprincipal);
router.get('/formUsuario',funciones.formUsuario);
router.get('/formProducto',funciones.formProducto);
router.get('/listaProductos',funciones.listaproductos);
router.get('/productos',funciones.productos);
router.get('/formVendedor',funciones.formVendedores);
router.get('/listaVendedores',funciones.listaVendedores);
router.get('/inicioSesion',funciones.inicioSesion);
router.post('/registrarUsuario',funciones.nuevoUsuario);
router.post('/autenticarUsuario',funciones.autenticarUsuario);
router.post('/registrarProducto',funciones.nuevoProducto);
router.post('/actualizarProducto',funciones.actualizarProducto);
router.post('/registrarVendeodor',funciones.registrarVendedor);


module.exports=router;
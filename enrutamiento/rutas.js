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



//rutas Productos
router.get('/formProducto',funciones.formProducto);
router.get('/listaProductos',funciones.listaproductos);
router.get('/productos',funciones.productos);
router.post('/registrarProducto',funciones.nuevoProducto);
router.post('/actualizarProducto',funciones.actualizarProducto);

//rutas Inicio de sesión 
router.get('/inicioSesion',funciones.inicioSesion);

//rutas Carrito
router.get('/agregarCarrito',funciones.agregarAlCarrito);


module.exports=router;
const funciones = require('../controladores/funcionesProductos');
const express =require('express');
const router = express.Router();


router.get('/formProducto',funciones.formProducto);
router.get('/listaProductos',funciones.listaproductos);
router.get('/productos',funciones.productos);
router.post('/registrarProducto',funciones.nuevoProducto);
router.post('/actualizarProducto',funciones.actualizarProducto);
router.get('/descargarExcel',funciones.descargarExcel);


module.exports=router;
const funciones = require('../controladores/funcionesVendedores');
const express =require('express');
const router = express.Router();

router.get('/formVendedor',funciones.formVendedores);
router.get('/listaVendedores',funciones.listaVendedores);
router.post('/registrarVendeodor',funciones.registrarVendedor);

module.exports=router;

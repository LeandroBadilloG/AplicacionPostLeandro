const funciones = require('../controladores/funciones');
const express =require('express');
const router = express.Router();

router.get('/principal',funciones.paginaprincipal);
router.get('/registro',funciones.formularioregistrar);

module.exports=router;
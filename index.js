const express = require('express');
const app = express();
const morgan=require('morgan');

//coneccion a la carpeta views
const path = require('path')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'vistas'));

//coneccion al puerto
const dotenv =require('dotenv');
dotenv.config();
const PORT= process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

const ruta = require('./enrutamiento/rutas')

app.use('/tienda/v1',ruta);



app.listen(PORT, ()=>{
    console.log(`Conectado en el puerto ${PORT}`);
});

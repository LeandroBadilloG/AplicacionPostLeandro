const express = require('express');
const app = express();
const morgan = require('morgan');

// coneccion a la carpeta views
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

// coneccion al puerto
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

// cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// static
app.use(express.static(path.join(__dirname, 'static')));

app.use(express.json());
app.use(morgan('dev'));

// express.urlencoded se utiliza par que escuche  la informacio que llega al req
app.use(express.urlencoded({ extended: true }));

const rutas = require('./enrutamiento/rutas');

app.use('/', rutas);

app.listen(PORT, () => {
  console.log(`Conectado en el puerto ${PORT}`);
});

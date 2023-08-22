const mongoose = require('../configuracion/conexionBD');

const schemaVenta = new mongoose.Schema({
vendedor:{

},

cliente:[
    
],

productos:[

],

totalCompra:{

}

});

const nuevaVenta = mongoose.model('Ventas', schemaVenta);
module.exports = nuevaVenta;

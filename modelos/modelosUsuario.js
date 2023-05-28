const { default: mongoose } = require("mongoose");

const coneccion  = require('../configuracion/conexionBD')

const schemaUsuario = new mongoose.Schema({

    nombreUsuario:{
        type:String,
        require:true,
    },
    apellidosUsuario:{
        type:String,
        require:true,
    },
    telefonoUsuario:{
        type:Number,
        unique:true,
        require:true,
        min:10,
    },
    ubicacionUsuario: {
        type:String,
        require:true,
        min:10
    },
    correoUsuario:{
        type:String,
        unique:true,
        require:true,
        
    },
    contraseñaUsuario:{
        type:String,
        unique:true,
        require:true,
    }
});

const nuevoUsuario = mongoose.model('usuarios',schemaUsuario);
module.exports=nuevoUsuario;




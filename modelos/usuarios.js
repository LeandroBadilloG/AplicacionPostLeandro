const { default: mongoose } = require("mongoose");

const coneccion  = require('../configuracion/coneccionBD')

const esquemaUsuario = new mongoose.Schema({

    nombreUsuario:{
        type:String,
        require:true,
        default:'',
    },
    apellidosUsuario:{
        type:String,
        require:true,
        default:'',
    },
    correoUsuario:{
        type:String,
        unique:true,
        require:true,
        default:'',
    },
    contraseñaUsuario:{
        type:String,
        unique:true,
        require:true,
        default:'',
    }
})
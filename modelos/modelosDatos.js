const { default: mongoose } = require("mongoose");

const coneccion  = require('../configuracion/coneccionBD')

const esquemaUsuario = new mongoose.Schema({

    nombreUsuario:{
        type:String,
        require:true,
        default:'Se requiere un Nombre del usuario',
    },
    apellidosUsuario:{
        type:String,
        require:true,
        default:'Se requiere un Apellido del usuario',
    },
    telefonoUsuario:{
        type:Number,
        unique:true,
        require:true,
        default:'Se requiere un Telefono del usuario',
        min:10
    },
    ubicacionUsuario: {
        type:String,
        unique:true,
        require:true,
        default:'Se requiere la direccion del usuario',
        min:10
    },
    correoUsuario:{
        type:String,
        unique:true,
        require:true,
        default:'Se requiere un Correo del usuario',
    },
    contraseñaUsuario:{
        type:String,
        unique:true,
        require:true,
        default:'Se requiere un Contraseña del usuario',
    },
})
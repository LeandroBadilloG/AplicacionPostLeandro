const { default: mongoose } = require("mongoose");

const coneccion  = require('../configuracion/conexionBD');

// const  bcrypt  = require ( ' bcryptjs ' ) ;

const schemaUsuario = new mongoose.Schema({

    nombreUsuario:{
        type:String,
        
    },
    apellidosUsuario:{
        type:String,
        
    },
    telefonoUsuario:{
        type:Number,
        unique:true,
        
        min:10,
    },
    documentoUsuario:{
        type:Number,
        unique:true,
        
    },
    ubicacionUsuario: {
        type:String,
        
        min:10
    },
    correoUsuario:{
        type:String,
        
        
        
    },
    contraseñaUsuario:{
        type:String,
        

    },
    rol:{
        type:String
    },
},{
    //crea una variable mas al modelo con la informacion de cuando fue creado o cuando fue ctualizado la ultima vez
    timestamps:true,
});

// //encritamos la contraseña llamando al modelo de los usuarios agregandole un metodo con una funcion la cual llame encriptarContraseña
// schemaUsuario.methods.encriptarContraseña= async contraseñaUsuario =>{
//     // generamos un getSalt en X cantidad d veces, ente mas veces se ejecte mas segura sera la contraseña pero es mas lento
//     const salt = await bcrypt.genSalt(10);
//     // ponemos bcrypt.hash para generar el sifrado y los parametros que requiere es el String 'la contraseña', y el salt 
//     bcrypt.hash(contraseñaUsuario,salt);
// }

// // con esto retornamos un true o un false al comprar la contraseña 
// schemaUsuario.methods.compararContraseña = async function(contraseñaUsuario){
//     return await bcrypt.compare(contraseñaUsuario, this.contraseñaUsuario);
// }

const nuevoUsuario = mongoose.model('usuarios',schemaUsuario);
module.exports=nuevoUsuario;




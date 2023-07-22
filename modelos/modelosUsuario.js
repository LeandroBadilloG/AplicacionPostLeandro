const { default: mongoose } = require("mongoose");

const coneccion  = require('../configuracion/conexionBD');

// const  bcrypt  = require ( ' bcryptjs ' ) ;

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
        
        require:true,
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




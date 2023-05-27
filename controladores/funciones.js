const usuario = require('../modelos/modelosUsuario');
const producto = require('../modelos/modelosProducto')

exports.paginaprincipal=(req, res)=>{
    res.render('principal')
}
exports.formUsuario=(req,res)=>{
    res.render('formUsuario');  
}

exports.formProducto=(req,res)=>{
    res.render('formProducto');
}

exports.listaproductos= async(req,res)=>{
    const listaProductos = await producto.find();
    res.render('listaProductos',{
        "productos":listaProductos,
    })

}


exports.nuevoUsuario=(req,res)=>{
    
    const nuevoUsuario = new usuario ({
        nombreUsuario: req.body.nombreUsuario,
        apellidosUsuario:req.body.apellidoUsuario,
        telefonoUsuario:req.body.telefonoUsuario,
        ubicacionUsuario:req.body.direccionUsuario,
        correoUsuario:req.body.correoUsuario,
        contraseñaUsuario:req.body.contraseñaUsuario,
    })
    nuevoUsuario.save();
    console.log(req.body)
    res.redirect('/tienda/v1/principal')   
}


exports.nuevoProducto=(req,res)=>{
    const nuevoProducto = new producto({
        categoriaProducto:req.body.categoriaProducto,
        nombreProducto:req.body.nombreProducto,
        descripcionProducto:req.body.descripcionProducto,
        precioProducto:req.body.precioProducto,
    })
    nuevoProducto.save();
    console.log(req.body);
    res.redirect('listaProductos')
}

exports.actualizarProducto=async(req,res)=>{
    await producto.findByIdAndUpdate(req.body.id,{
        categoriaProducto:req.body.categoriaProducto,
        nombreProducto:req.body.nombreProducto,
        descripcionProducto:req.body.descripcionProducto,
        precioProducto:req.body.precioProducto,
    })
    console.log(req.body)
    res.redirect('listaProductos')
}
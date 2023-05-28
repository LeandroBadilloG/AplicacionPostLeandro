const usuario = require('../modelos/modelosUsuario');
const producto = require('../modelos/modelosProducto');
const vendedores = require('../modelos/modelosVendedores');

exports.paginaprincipal=(req, res)=>{
    res.render('principal')
}
exports.formUsuario=(req,res)=>{
    res.render('formUsuario');  
}

exports.formProducto=(req,res)=>{
    res.render('formProducto');
}

exports.formVendedores=(req,res)=>{
    res.render('formVendedor')
}

exports.inicioSesion=(req,res)=>{
    res.render('inicioSesion')
}

exports.listaproductos= async(req,res)=>{
    const listaProductos = await producto.find();
    res.render('listaProductos',{
        "productos":listaProductos,
    })
}

exports.productos=async(req,res)=>{
    const listaProductos = await producto.find();
    res.render('productos',{
        "productos":listaProductos,
    })
}

exports.listaVendedores= async(req,res)=>{
    const listaVendedores= await vendedores.find();
    res.render('listaVendedores',{
        'vendedores':listaVendedores
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

exports.autenticarUsuario=async(req,res)=>{
    const correo =req.body.correoUsuario;
    const contraseña =req.body.contraseñaUsuario;
    console.log(correo);
    const buscarUsuario = await usuario.findOne({"correoUsuario":correo});
    console.log(buscarUsuario);
    if(buscarUsuario.contraseñaUsuario==contraseña){
        res.send('inicio sesion');
    }else {
        res.send('ERROR')
    }
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


exports.registrarVendedor=(req,res)=>{
    const nuevoVendedor = new vendedores({
        nombreVendedor:req.body.nombreVendedor,
        documentoVendedor:req.body.documentoVendedor,
        correoVendedor:req.body.correoVendedor,
        contraseñaVendedor:req.body.contraseñaVendedor,
    })
    nuevoVendedor.save()
    res.send('Se registro el vendedor');
}
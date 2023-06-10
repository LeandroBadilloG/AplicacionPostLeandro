const usuario = require('../modelos/modelosUsuario');
const producto = require('../modelos/modelosProducto');
const vendedores = require('../modelos/modelosVendedores');
const ventas = require('../modelos/modelosVentas');

const xl = require('excel4node');
const path = require('path')
const fs = require('fs');


exports.paginaprincipal = (req, res) => {
    res.render('principal')
}
exports.formUsuario = (req, res) => {
    res.render('usuarios/formUsuario');
}

exports.formProducto = (req, res) => {
    res.render('productos/formProducto');
}

exports.formVendedores = (req, res) => {
    res.render('vendedores/formVendedor')
}

exports.inicioSesion = (req, res) => {
    res.render('usuarios/inicioSesion')
}

exports.listaproductos = async (req, res) => {
    const listaProductos = await producto.find();
    res.render('productos/listaProductos', {
        "productos": listaProductos,
    })

}

exports.productos = async (req, res) => {
    const listaProductos = await producto.find();
    res.render('productos/productos', {
        "productos": listaProductos,
    })

}

exports.listaVendedores = async (req, res) => {
    const listaVendedores = await vendedores.find();
    res.render('vendedores/listaVendedores', {
        'vendedores': listaVendedores
    })
}


exports.cookies = (req, res) => {
    res.cookie('Nombre', 'cookie').send('lista la cookie');
}

exports.nuevoUsuario = (req, res) => {

    const nuevoUsuario = new usuario({
        nombreUsuario: req.body.nombreUsuario,
        apellidosUsuario: req.body.apellidoUsuario,
        telefonoUsuario: req.body.telefonoUsuario,
        ubicacionUsuario: req.body.direccionUsuario,
        correoUsuario: req.body.correoUsuario,
        contraseñaUsuario: req.body.contraseñaUsuario,
    })
    nuevoUsuario.save();
    console.log(req.body)
    res.redirect('principal')
}

exports.autenticarUsuario = async (req, res) => {
    const correo = req.body.correoUsuario;
    const contraseña = req.body.contraseñaUsuario;
    console.log(correo);
    const buscarUsuario = await usuario.findOne({ "correoUsuario": correo });
    console.log(buscarUsuario);
    if (buscarUsuario.contraseñaUsuario == contraseña) {
        res.send('inicio sesion');
    } else {
        res.send('ERROR')
    }
}

exports.nuevoProducto = (req, res) => {
    const nuevoProducto = new producto({
        categoriaProducto: req.body.categoriaProducto,
        nombreProducto: req.body.nombreProducto,
        descripcionProducto: req.body.descripcionProducto,
        precioProducto: req.body.precioProducto,
    })
    nuevoProducto.save();
    console.log(req.body);
    res.redirect('productos/listaProductos')
}

exports.actualizarProducto = async (req, res) => {
    await producto.findByIdAndUpdate(req.body.id, {
        categoriaProducto: req.body.categoriaProducto,
        nombreProducto: req.body.nombreProducto,
        descripcionProducto: req.body.descripcionProducto,
        precioProducto: req.body.precioProducto,
    })
    console.log(req.body)
    res.redirect('listaProductos')
}


exports.registrarVendedor = (req, res) => {
    const nuevoVendedor = new vendedores({
        nombreVendedor: req.body.nombreVendedor,
        documentoVendedor: req.body.documentoVendedor,
        correoVendedor: req.body.correoVendedor,
        contraseñaVendedor: req.body.contraseñaVendedor,
    })
    nuevoVendedor.save()
    res.render('vendedores/listaVendedores');
}

exports.agregarAlCarrito = (req, res) => {

}


exports.descargarExcel = async(req, res) => {
    //configuramos el excel4node

    //creamos un nuevo documento
    const wb = new xl.Workbook();
    //definimos el nombre con el cual se descargara el archibo 
    const nombreArchivo = 'TablaPrductos';
    //se define el nombre 
    var ws = wb.addWorksheet(nombreArchivo);



    //definimos estilos
    const columnaEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });


    const contenidoEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#565656',
            size: 11,

        }
    });

    //definimos el nombre de las colombas
    ws.cell(1, 1).string('Caegoria').style(columnaEstilo);
    ws.cell(1, 2).string('Nombre').style(columnaEstilo);
    ws.cell(1, 3).string('Descripcion').style(columnaEstilo);
    ws.cell(1, 4).string('Precio').style(columnaEstilo);

    //llamamos a la base de datos
    const listaProductos = await producto.find()

    // definimos un contador que empiese en 2 
    let fila = 2;

    //agregamos el contenido de la base de daros con un for o un forEach para llamar todos los datos 
    
    listaProductos.forEach(datoProducto => {
    ws.cell(fila, 1).string(datoProducto.categoriaProducto).style(contenidoEstilo);
    ws.cell(fila, 2).string(datoProducto.nombreProducto).style(contenidoEstilo);
    ws.cell(fila, 3).string(datoProducto.descripcionProducto).style(contenidoEstilo);
    ws.cell(fila, 4).number(datoProducto.precioProducto).style(contenidoEstilo);
    
    fila = fila +1;
    });
    





    //Creamos una carpeta en la cual guardaremos los documentos
    //definimos la ruta de la carpeta 


    //const rutaExcel = path.join(__dirname,'excel',nombreArchivo +'.xlsx');

    const rutaExcel = path.join(__dirname,'excel'+ nombreArchivo +'.xlsx');


    //escrivir y guardar en el documento 
    //se le inclulle la ruta y una funcion 
    wb.write(rutaExcel, function(err,stars){
        //capturamos y mostramos en caso de un error
        if(err)console.log(err);
        //creamos una funcion que descargue el archibo y lo elimine 
        else{

            //guardamos el documento en la carpeta para excel para poder descargarla en el pc
            function descargarDocumento(){res.download(rutaExcel);}
                descargarDocumento();
                console.log('documento descargado correctamente');

                //Eliminamos el documento de la carpeta excel
                fs.rm(rutaExcel, function(err){
                    if(err)console.log(err);
                    else console.log('Arechibo descargado y borrado del servidor correctamente');
                });
                

        }
    });

    
}
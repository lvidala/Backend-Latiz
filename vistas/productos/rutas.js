import Express from 'express';
import { editarProducto, 
    crearProducto, 
    eliminarProducto, 
consultarProductoPorId, 
listarProductos} from '../../controladores/productos/controlador.js';

const rutasProducto = Express.Router();

const genericCallback = (res) => (err, result) => {
  //función anidada que puede ser reutilizada en todos los modelos, manda al front un error en forma de status o un resultado como archivo json
  console.log(err)      
  if(err) {
            res.status(err.status).send(err.message)
        } else {
            res.json(result);
        }
    };


//las rutas se manejaron de forma dinámica, para poder ejecutar patch y delete necesitamos un id obligatorio para obtener la información del producto específico.

//GET ALL PRODUCTS
rutasProducto.route('/products').get((req, res) => {
    console.log('alguien hizo get en la ruta /products');
    listarProductos(req.query, genericCallback(res))
});

//CREATE A PRODUCT
rutasProducto.route('/products/create').post((req,res) =>{ 
    crearProducto(req.body, genericCallback(res));
})


//SEARCH PRODUCT BY ID
rutasProducto.route('/products/:id').get((req, res) => {
    console.log('alguien hizo get by id en la ruta /products');
    consultarProductoPorId(req.params.id, genericCallback(res));
});

//EDIT ELEMENT BY ID
rutasProducto.route('/products/edit/:id').patch((req, res) => {   
    console.log('alguien hizo patch en la ruta /productss/edit');
    editarProducto(req.params.id, req.body, genericCallback(res));
});

//DELETE PRODUCT BY ID
rutasProducto.route('/products/delete/:id').delete((req, res) => {
    console.log('alguien hizo delete en la ruta /products/delete');
    eliminarProducto(req.params.id, genericCallback(res));
})


export default rutasProducto;

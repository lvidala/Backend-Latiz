import Express from 'express';
import { editarProducto, 
    crearProducto, 
    eliminarProducto, 
consultarProductoPorId, 
listarProductos} from '../../controladores/productos/controlador.js';

const rutasProducto = Express.Router();

<<<<<<< HEAD
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
    listarProductos(genericCallback(res))
});

//CREATE A PRODUCT
rutasProducto.route('/products/create').post((req,res) =>{ 
=======
const genericCallback = (res) => (err, result) => {    
    if(err) {
        res.status(err.status).send(err.message)
    } else {
        res.json(result);
    }
};

//GET ALL PRODUCTS
rutasProducto.get('/',(req,res)=>{
    console.log('alguien hizo get en la ruta /productos');    
    queryAllProducts(req.query,genericCallback(res))
})


//CREATE A PRODUCT
rutasProducto.post('/create',(req,res)=>{
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6
    crearProducto(req.body, genericCallback(res));
})


<<<<<<< HEAD
//SEARCH PRODUCT BY ID
rutasProducto.route('/products/:id').get((req, res) => {
    console.log('alguien hizo get by id en la ruta /products');
    consultarProductoPorId(req.params.id, genericCallback(res));
});

//EDIT ELEMENT BY ID
rutasProducto.route('/products/edit/:id').patch((req, res) => {   
    console.log('alguien hizo patch en la ruta /productss/edit');
=======
// SEARCH PRODUC BY ID
rutasProducto.get('/:id',(req, res) => {
    console.log('alguien hizo get one product en la ruta /productos');
    consultarProductoPorId(req.params.id, genericCallback(res));
});

// SEARCH PRODUC BY NAME
rutasProducto.get('/:name',(req, res) => {
    console.log('alguien hizo get one product en la ruta /productos');
    consultarProductoPorNombre(req.params.id, genericCallback(res));
});


//EDIT ELEMENT BY ID
rutasProducto.patch('/edit/:id',(req, res) => {   //
    console.log('alguien hizo patch en la ruta /productos/editar');
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6
    editarProducto(req.params.id, req.body, genericCallback(res));
});

<<<<<<< HEAD
//DELETE PRODUCT BY ID
rutasProducto.route('/products/delete/:id').delete((req, res) => {
    console.log('alguien hizo delete en la ruta /products/delete');
=======
//Delete PRODUCT BY ID
rutasProducto.delete('/delete/:id',(req,res)=>{
    console.log('alguien hizo delete en la ruta /productos/eliminar');
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6
    eliminarProducto(req.params.id, genericCallback(res));
})


export default rutasProducto;

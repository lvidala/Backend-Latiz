import Express from 'express';
import { editarVenta, 
    listarVentas, 
    crearVenta, 
    consultarVenta } from '../../controladores/ventas/controlador.js';

const rutasVenta = Express.Router();

const genericCallback = (res) => (err, result) => {
  //función anidada que puede ser reutilizada en todos los modelos, manda al front un error en forma de status o un resultado como archivo json
  console.log(err)      
  if(err) {
            res.status(err.status).send(err.message)
        } else {
            res.json(result);
        }
    };


//las rutas se manejaron de forma dinámica, para poder ejecutar patch y delete necesitamos un id obligatorio para obtener la información del Venta específico.

<<<<<<< HEAD
rutasVenta.route('/sales').get((req, res) => {
    console.log('alguien hizo get en la ruta /sales');
    listarVentas(genericCallback(res));
});

rutasVenta.route('/sales/create').post((req,res) =>{ 
=======

//GET ALL SALES
rutasVenta.get('/',(req, res) => {
    console.log('alguien hizo get en la ruta /ventas');
    queryAllSales(genericCallback(res));
});


//CREATE A SALE
rutasVenta.post('/create',(req,res) =>{ 
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6
    crearVenta(req.body, genericCallback(res));
   
});

<<<<<<< HEAD
rutasVenta.route('/sales/:id').get((req, res) => {
    console.log('alguien hizo get one user en la ruta /sales');
    consultarVenta(req.params.id, genericCallback(res));
});


rutasVenta.route('/sales/edit/:id').patch((req, res) => {   //
    console.log('alguien hizo patch en la ruta /sales/editar');
=======
//SEARCH SALE 
rutasVenta.get('/:id',(req, res) => {
    consultarVenta(req.params.id, genericCallback(res));
});

//EDIT SALE
rutasVenta.route('/edit/:id',(req, res) => {   //
    console.log('alguien hizo patch en la ruta /ventas/editar');
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6
    editarVenta(req.params.id, req.body, genericCallback(res));

});


export default rutasVenta;

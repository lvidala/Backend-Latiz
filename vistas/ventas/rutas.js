import Express from 'express';
import { editarVenta, 
    queryAllSales, 
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


//GET ALL SALES
rutasVenta.get('/',(req, res) => {
    console.log('alguien hizo get en la ruta /ventas');
    queryAllSales(genericCallback(res));
});


//CREATE A SALE
rutasVenta.post('/create',(req,res) =>{ 
    crearVenta(req.body, genericCallback(res));
   
});

//SEARCH SALE 
rutasVenta.get('/:id',(req, res) => {
    consultarVenta(req.params.id, genericCallback(res));
});

//EDIT SALE
rutasVenta.route('/edit/:id',(req, res) => {   //
    console.log('alguien hizo patch en la ruta /ventas/editar');
    editarVenta(req.params.id, req.body, genericCallback(res));

});


export default rutasVenta;

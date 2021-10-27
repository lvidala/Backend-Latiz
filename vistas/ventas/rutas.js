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

rutasVenta.route('/sales').get((req, res) => {
    console.log('alguien hizo get en la ruta /sales');
    listarVentas(genericCallback(res));
});

rutasVenta.route('/sales/create').post((req,res) =>{ 
    crearVenta(req.body, genericCallback(res));
   
});

rutasVenta.route('/sales/:id').get((req, res) => {
    console.log('alguien hizo get one user en la ruta /sales');
    consultarVenta(req.params.id, genericCallback(res));
});


rutasVenta.route('/sales/edit/:id').patch((req, res) => {   //
    console.log('alguien hizo patch en la ruta /sales/editar');
    editarVenta(req.params.id, req.body, genericCallback(res));

});


export default rutasVenta;
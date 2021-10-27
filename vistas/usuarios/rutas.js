import Express from 'express';
import { editarUsuario, 
    listarUsuarios, 
    crearUsuario,  
    consultarUsuario 
} from '../../controladores/usuarios/controlador.js';

const rutasUsuario = Express.Router();

const genericCallback = (res) => (err, result) => {
  //función anidada que puede ser reutilizada en todos los modelos, manda al front un error en forma de status o un resultado como archivo json
  console.log(err)      
  if(err) {
            res.status(err.status).send(err.message)
        } else {
            res.json(result);
        }
    };


//las rutas se manejaron de forma dinámica, para poder ejecutar patch y delete necesitamos un id obligatorio para obtener la información del Usuario específico.

//GET ALL USERS
rutasUsuario.route('/users').get((req, res) => {
    console.log('alguien hizo get en la ruta /users');
    listarUsuarios(genericCallback(res));
});

//CREATE AN USER
rutasUsuario.route('/users/create').post((req,res) =>{ 
    console.log('alguien hizo get en la ruta /users/create');
    crearUsuario(req.body, genericCallback(res));
   
});


rutasUsuario.route('/users/self').get((req, res) => {
    console.log('alguien hizo get en la ruta /self');       //ruta self --- donde está la info personal de cada usuario
    consultarOCrearUsuario(req, genericCallback(res));
    //consultarUsuario(req.params.id, genericCallback(res));
});

//GET USER BY ID
rutasUsuario.route('/users/:id').get((req, res) => {
    console.log('alguien hizo get one user en la ruta /users');
    consultarUsuario(req.params.id, genericCallback(res));
});

//EDIT USER
rutasUsuario.route('/users/edit/:id').patch((req, res) => {   //
    console.log('alguien hizo patch en la ruta /users/edit');
    editarUsuario(req.params.id, req.body, genericCallback(res));

});

export default rutasUsuario;

import Express from 'express';
import { editarUsuario, 
<<<<<<< HEAD
    listarUsuarios, 
    crearUsuario,  
    consultarUsuario 
=======
    queryAllUsers, 
    crearUsuario, 
    //consultarUsuario 
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6
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

<<<<<<< HEAD
rutasUsuario.route('/users').get((req, res) => {
    console.log('alguien hizo get en la ruta /users');
    listarUsuarios(genericCallback(res));
});

rutasUsuario.route('/users/create').post((req,res) =>{ 
  //agregar un nuevo Usuario en la bd, con unos campos obligatorios.
=======

//GET ALL USERS
rutasUsuario.route('/').get((req, res) => {
    console.log('alguien hizo get en la ruta /usuarios');
    queryAllUsers(genericCallback(res));
});

//CREATE USER
rutasUsuario.route('/create',(req,res) =>{ 
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6
    crearUsuario(req.body, genericCallback(res));
   
});

<<<<<<< HEAD
rutasUsuario.route('/users/self').get((req, res) => {
    console.log('alguien hizo get en la ruta /self');       //ruta self --- donde está la info personal de cada usuario
    consultarOCrearUsuario(req, genericCallback(res));
    //consultarUsuario(req.params.id, genericCallback(res));
});

rutasUsuario.route('/users/:id').get((req, res) => {
    console.log('alguien hizo get one user en la ruta /users');
    consultarUsuario(req.params.id, genericCallback(res));
});


rutasUsuario.route('/users/edit/:id').patch((req, res) => {   //
    console.log('alguien hizo patch en la ruta /users/editar');
=======
// rutasUsuario.route('/usuarios/self').get((req, res) => {
//     console.log('alguien hizo get en la ruta /self');       //ruta self --- donde está la info personal de cada usuario
//     consultarOCrearUsuario(req, genericCallback(res));
//     //consultarUsuario(req.params.id, genericCallback(res));
// });

//SEARCH USER BY ID
rutasUsuario.get('/:id',(req, res) => {
    console.log('alguien hizo get one user en la ruta /usuarios');
    consultarUsuarioPorId(req.params.id, genericCallback(res));
});

//EDIT USER BY ID
rutasUsuario.patch('/edit/:id',(req, res) => {   //
    console.log('alguien hizo patch en la ruta /usuarios/editar');
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6
    editarUsuario(req.params.id, req.body, genericCallback(res));

});

<<<<<<< HEAD
export default rutasUsuario;
=======
export default rutasUsuario;
>>>>>>> 0e83f63e9d7f81c450c5b6da303a4b0a658739d6

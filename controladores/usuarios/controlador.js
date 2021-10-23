import { getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';


const queryAllUsers = async (callback) => {  //controlador que muestra todos los Usuarios.
const baseDeDatos = getDB();
await baseDeDatos
.collection('users')
.find() //aquí puedo agregar filtros de búsqueda
.limit(50)
.toArray(callback);
};

const crearUsuario = async (datosUsuario, callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('users').insertOne(datosUsuario, callback);
  };

const consultarUsuario = async (id,callback) => { //controlador que muestra un solo Usuario.
    const baseDeDatos = getDB(); 
await baseDeDatos
.collection('users')
.findOne({_id: new ObjectId(id)}, callback);
};


const editarUsuario = async (id, edicion, callback) => {
    const filtroUsuario = { _id: new ObjectId(id) };
    const operacion = {
        $set: edicion,
    };

    const baseDeDatos = getDB();
    await baseDeDatos
    .collection('users')
    .findOneAndUpdate(filtroUsuario, operacion, {upsert: true, returnOriginal: true}, callback);
};

const eliminarUsuario = async (id, callback) => {
    const filtroUsuario = { _id: new ObjectId(id) };
    const baseDeDatos = getDB();
    await baseDeDatos.collection('users').deleteOne(filtroUsuario, callback);
  };

export { queryAllUsers, crearUsuario, editarUsuario, eliminarUsuario, consultarUsuario}; 
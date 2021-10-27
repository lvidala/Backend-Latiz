import { getDB } from '../../db/db.js';
import { ObjectId } from 'mongodb';


export const queryAllSales = async (callback) => {  //controlador que muestra todos los Ventas.
const baseDeDatos = getDB();
await baseDeDatos
.collection('sales')
.find() //aquí puedo agregar filtros de búsqueda
.limit(50)
.toArray(callback);
};



export const crearVenta = async (datosVenta, callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('sales').insertOne(datosVenta, callback);
  };

export const consultarVenta = async (id,callback) => { //controlador que muestra una solo Venta.
    const baseDeDatos = getDB(); 
await baseDeDatos
.collection('sales')
.findOne({_id: new ObjectId(id)}, callback);
};


export const editarVenta = async (id, edicion, callback) => {
    const filtroVenta = { _id: new ObjectId(id) };
    const operacion = {
        $set: edicion,
    };

    const baseDeDatos = getDB();
    await baseDeDatos
    .collection('sales')
    .findOneAndUpdate(filtroVenta, operacion, {upsert: true, returnOriginal: true}, callback);
};

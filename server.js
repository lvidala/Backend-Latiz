import Express from 'express'; //import de express con type: module. También se puede express const express = require ('express')
import Cors from 'cors'; //poder compartir recursos entre varios origines diferentes.
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import rutasProducto from './vistas/productos/rutas.js';

dotenv.config({path: './.env'});

const app = Express(); //aquí se agrega todo lo que necesitamos.
app.use(Express.json());  //convierte en objetos json lo que llegue del request.
app.use(Cors());
app.use(rutasProducto);

const main = () => {
    return app.listen(process.env.PORT, () => {
        console.log(`escuchando puerto ${process.env.PORT}`); //prende el servidor escuchando solicitudes en un puerto específico.
    });
};

conectarBD(main);
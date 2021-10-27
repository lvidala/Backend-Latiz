import Express from 'express'; 
import Cors from 'cors'; //poder compartir recursos entre varios origines diferentes.
import dotenv from 'dotenv';
import { conectarBD } from './db/db.js';
import rutasProducto from './vistas/productos/rutas.js';
import rutasUsuario from './vistas/usuarios/rutas.js'
import rutasVenta from './vistas/ventas/rutas.js';
// import jwt from 'express-jwt';
// import jwks from 'jwks-rsa'
// import autorizacionEstadoUsuario from './middleware/autorizacionEstadoUsuario.js';



dotenv.config({path: './.env'});

const app = Express(); //aquí se agrega todo lo que necesitamos.
//const Cors = require('cors');

app.use(Express.json());  //convierte en objetos json lo que llegue del request.
app.use(Cors());
app.use(Express.urlencoded({extended:false}))

// var jwtCheck = jwt({ //este código es un middleware que revisa el token de Auth0 y verifica si es válido o no
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: 'https://dev-vq1hj1gm.us.auth0.com/.well-known/jwks.json' //endpoint con tokens que auth0 ya conocer
//   }),
//   audience: 'api-autenticacion-latiz', //identificación del API
//   issuer: 'https://dev-vq1hj1gm.us.auth0.com/',
//   algorithms: ['RS256']
// });

// app.use(jwtCheck);
// app.use(autorizacionEstadoUsuario); //middleware

app.use(rutasProducto);
app.use(rutasUsuario);
app.use(rutasVenta);

app.get('/',(req,res) => {
    res.json({connected:true})
})

const port = process.env.PORT || 3000;

const main = () => {
    return app.listen(port, () => {
        console.log(`escuchando puerto ${port}`); //prende el servidor escuchando solicitudes en un puerto específico.
    });
};

conectarBD(main);

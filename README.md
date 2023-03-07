# Personas App

Ejemplo de API REST usando ExpressJS.

## Instalación

- `git clone https://github.com/akobashikawa/express-personas.git`
- `npm install`
- `npm run dev`
- http://localhost:3000

## Libraries

- [ExpressJS](https://expressjs.com/es/) v4
    - javascript para el backend
- [Bootstrap](https://getbootstrap.com/) v5
    - estilos para el frontend
- [VueJS](https://vuejs.org/) v3
    - javascript para el frontend
- [Axios](https://axios-http.com/) v1.3
    - para las solicitudes del frontend al backend

## Ideas

- Usaremos express para servir tanto el backend como el frontend.
- _express generator_ para generar el esqueleto de la app

```bash
$ express --git --no-view personas-app
$ cd personas-app
$ npm install
$ npm start
```

- _routes_ para contener el backend

```js
// app.js
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
```

- _public_ para contener el frontend

```js
// app.js
app.use(express.static(path.join(__dirname, 'public')));
```

### Personas Swagger

- Con Swagger para autogenerar la documentación del backend.

```js
"scripts": {
    "start": "npm run gendoc && node ./bin/www",
    "dev": "npm run gendoc && nodemon ./bin/www",
    "gendoc": "node swagger.js"
},
```

```js
// swagger.json
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Personas API',
    description: 'API REST para Personas',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
```

```js
// app.js
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
//...
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
```

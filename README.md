# Personas App

Ejemplo de API REST usando ExpressJS.

## Instalación

- `git clone https://github.com/akobashikawa/express-personas.git`
- `npm install`
- `npm run dev`
- http://localhost:3000

## Libraries

- [ExpressJS](https://expressjs.com/es/) v4
- [Bootstrap](https://getbootstrap.com/) v5
- [VueJS](https://vuejs.org/) v3
- [Axios](https://axios-http.com/) v1.3

## Ideas

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

## Ramas

- Cada rama contiene un caso desarrollado.

const holaService = {

    create() {
        const obj = Object.create(this);
        return obj;
    },

    hola(nombre) {
        const saludo = nombre ? `Hola ${nombre}!` : 'Hola Mundo!';
        const respuesta = {
            saludo,
        }
        return respuesta;
    },

};

module.exports = holaService;
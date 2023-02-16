const personasService = {
    personas: null,

    create() {
        const obj = Object.create(this);
        obj.personas = [];
        return obj;
    },

    agregar(nombre) {
        const persona = { nombre };
        this.personas.push(persona);
        return persona;
    }


};

module.exports = personasService;
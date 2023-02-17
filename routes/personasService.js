const personasService = {
    id: null,
    personas: null,

    create() {
        const obj = Object.create(this);
        obj.id = 0;
        obj.personas = [];
        return obj;
    },

    listar() {
        // console.log(this.personas);
        return this.personas;
    },

    traer(id) {
        const found = this.personas.find(item => item.id == id);
        return found;
    },

    agregar(nombre) {
        this.id = this.id + 1;
        const persona = { id: this.id, nombre };
        // console.log({persona});
        this.personas.push(persona);
        return persona;
    },

    guardar(id, nombre) {
        const found = this.personas.find(item => item.id == id);
        found.nombre = nombre;
        return found;
    },

    eliminar(id) {
        const foundIndex = this.personas.findIndex(item => item.id == id);
        // console.log({foundIndex});
        const personaEliminada = this.personas.splice(foundIndex, 1);
        // console.log({personaEliminada});
        // console.log(this.personas);
        return personaEliminada;
    },
    


};

module.exports = personasService;
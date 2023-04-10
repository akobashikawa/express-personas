const notasService = {
    id: null,
    notas: null,

    create() {
        const obj = Object.create(this);
        obj.id = 0;
        obj.notas = [];
        return obj;
    },

    listar() {
        // console.log(this.notas);
        return this.notas;
    },

    traer(id) {
        const found = this.notas.find(item => item.id == id);
        return found;
    },

    agregar(texto) {
        this.id = this.id + 1;
        const nota = { id: this.id, texto };
        // console.log({nota});
        this.notas.push(nota);
        return nota;
    },

    guardar(id, texto) {
        const found = this.notas.find(item => item.id == id);
        found.texto = texto;
        return found;
    },

    eliminar(id) {
        const foundIndex = this.notas.findIndex(item => item.id == id);
        // console.log({foundIndex});
        const notaEliminada = this.notas.splice(foundIndex, 1);
        // console.log({notaEliminada});
        // console.log(this.notas);
        return notaEliminada;
    },
    


};

module.exports = notasService;
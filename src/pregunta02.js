// pregunta01.js
// ========
const Nodo = require('./Nodo');

module.exports = {
    a: function () {
        return createListaEnlazada();
    },

    b: function () {
        var listaEnlazada = createListaEnlazada();
        var ret = {"listaOriginal": listaEnlazada}
        var deleteNode = listaEnlazada.delete(7);
        ret.nodoBorrado = deleteNode;
        return ret;
    }

};

function createListaEnlazada() {
    var listaEnlazada = new Nodo.ListaEnlazada();
    //var lstEn = new ListaEnlazada();
    listaEnlazada.add(7);
    listaEnlazada.add(1);
    listaEnlazada.add(6);
    return listaEnlazada;
}
// pregunta01.js
// ========
const Nodo = require('./Nodo');

module.exports = {
    a: function () {
        var lista = createListaEnlazada([7, 1, 6, 9, 12]);
        var listaEnlazada = {
            "valores": lista.toString(),
            "lista": lista
        };
        return listaEnlazada;
    },

    b: function (valorBorrar, pos = false) {
        var listaEnlazada = createListaEnlazada([7, 1, 6]);

        console.log("valor nodo borrar:" + valorBorrar);
        var deleteNode = null;
        if (pos) {
            var deleteNode = listaEnlazada.deteleByPos(parseInt(valorBorrar));
        } else {
            var deleteNode = listaEnlazada.deleteByValue(parseInt(valorBorrar));
        }
        var ret = {
            "valores": listaEnlazada.toString(),
            "listaOriginal": listaEnlazada}
        ret.nodoBorrado = deleteNode ? deleteNode.data : null;
        return ret;
    },
    c: function () {
        var number1 = parseInt(listAsArray(createListaEnlazada([7, 1, 6])).reverse().join(''));
        var number2 = parseInt(listAsArray(createListaEnlazada([5, 9, 2])).reverse().join(''));
        return numberToListaEnlazada(number1, number2);
    },

    d: function () {
        var number1 = parseInt(listAsArray(createListaEnlazada([6, 1, 7])).join(''));
        var number2 = parseInt(listAsArray(createListaEnlazada([2, 9, 5])).join(''));
        return numberToListaEnlazada(number1, number2);
    }

};

function numberToListaEnlazada(number1, number2) {
    var number3 = (number1 + number2).toString();
    var arreglo = [];
    for (var i = 0; i < number3.length; i++) {
        arreglo.push(number3[i]);
    }
    var listaEnlazada = createListaEnlazada(arreglo);
    var listaEnlazadaRet = {
        "valores": listaEnlazada.toString(),
        "lista": listaEnlazada
    };
    return listaEnlazadaRet;
}

function listAsArray(listaEnlazada) {
    let nodoActual = listaEnlazada.head;
    var arrayList1 = [];
    if (nodoActual !== null) {
        while (nodoActual) {
            arrayList1.push(nodoActual.data);
            nodoActual = nodoActual.siguiente;
        }
    }
    return arrayList1;
}

function createListaEnlazada(array) {
    var listaEnlazada = new Nodo.ListaEnlazada();
    array.forEach(value => listaEnlazada.add(value));
    return listaEnlazada;
}

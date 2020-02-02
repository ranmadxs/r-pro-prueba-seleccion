

/**
 * Clase de Nodo para una Lista Simple
 */
class Nodo {
    constructor(valor, siguiente = null) {
        this.siguiente = siguiente;
        this.data = valor;
    }

    toString(callback) {
        return callback ? callback(this.data) : `${this.data}`;
    }
}
module.exports.Nodo = Nodo;

class ListaEnlazada {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Agrega un nodo a la Lista Enlazada
     * @param {*} valorNodo
     * @return {ListaEnlazada}
     */
    add(valorNodo) {
        var nuevoNodo = new Nodo(valorNodo);
        if (!this.head) {
            this.head = nuevoNodo;
            this.tail = nuevoNodo;
            return this;
        }
        this.tail.siguiente = nuevoNodo;
        this.tail = nuevoNodo;
        return this;
    }

    /**
     * Borra un nodo y lo devuelve
     * @param {*} value
     * @return {ListaEnlazada}
     */
    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.data === value) {
            deletedNode = this.head;
            this.head = this.head.siguiente;
        }
        

        let currentNode = this.head;

        /*
        if (currentNode !== null) {
            while (currentNode.siguiente) {
                if (currentNode.siguiente.data === value) {
                    deletedNode = currentNode.siguiente;
                    currentNode.siguiente = currentNode.siguiente.next;
                } else {
                    currentNode = currentNode.siguiente;
                }
            }
        }

        if (this.tail.data === value) {
            this.tail = currentNode;
        }
*/
        return deletedNode;
    }

    /**
     * Busca el nodo que posea el valor indicado y lo retorna
     * @param {*} valor
     * @param {function} [callback]
     * @return {Nodo}
     
     find( { valor = undefined, callback = undefined }) {
     if (!this.head) {
     return null;
     }
     
     let nodoActual = this.head;
     
     while (nodoActual) {
     if (callback && callback(nodoActual.data)) {
     return nodoActual;
     }
     
     if (valor !== undefined && this.compare.equal(nodoActual.data, valor)) {
     return nodoActual;
     }
     nodoActual = nodoActual.siguiente;
     }
     return null;
     }
     */
}

module.exports.ListaEnlazada = ListaEnlazada;
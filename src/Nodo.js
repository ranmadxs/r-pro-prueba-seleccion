

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

    deteleByPos(position) {
        if (!this.head) {
            return null;
        }
        let nodoBorrado = null;
        var pos = 1;

        while (this.head && pos === position) {
            nodoBorrado = this.head;
            this.head = this.head.siguiente;
            console.log("Borrando la cabecera");
            break;
        }
        pos++;
        let nodoActual = this.head;

        if (nodoActual !== null) {
            while (nodoActual.siguiente) {
                if (pos === position) {
                    console.log("Borrando " + nodoActual.data);
                    nodoBorrado = nodoActual.siguiente;
                    nodoActual.siguiente = nodoActual.siguiente.siguiente;

                } else {
                    nodoActual = nodoActual.siguiente;
                }
                pos++;
            }
        }

        if (pos === position) {
            this.tail = nodoActual;
        }

        return nodoBorrado;

    }

    /**
     * Borra un nodo y lo devuelve
     * @param {*} value
     * @return {ListaEnlazada}
     */
    deleteByValue(value) {
        if (!this.head) {
            return null;
        }

        let nodoBorrado = null;

        while (this.head && this.head.data === value) {
            nodoBorrado = this.head;
            this.head = this.head.siguiente;
        }


        let nodoActual = this.head;


        if (nodoActual !== null) {
            while (nodoActual.siguiente) {
                if (nodoActual.siguiente.data === value) {
                    nodoBorrado = nodoActual.siguiente;
                    nodoActual.siguiente = nodoActual.siguiente.siguiente;
                } else {
                    nodoActual = nodoActual.siguiente;
                }
            }
        }

        if (this.tail.data === value) {
            this.tail = nodoActual;
        }

        return nodoBorrado;
    }

    toString(callback) {
        let nodoActual = this.head;
        var arrayList1 = [];
        if (nodoActual !== null) {
            while (nodoActual) {
                arrayList1.push(nodoActual.data);
                nodoActual = nodoActual.siguiente;
            }
        }
        return "("+ arrayList1.join("->") + ")";
    }

}

module.exports.ListaEnlazada = ListaEnlazada;
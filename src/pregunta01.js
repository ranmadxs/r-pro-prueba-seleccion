// pregunta01.js
// ========
module.exports = {
    a: function (str) {
        var indices = [];
        console.debug('palabra analizar:' + str, 'pregunta01.a');
        var result = {'string': str};
        var cumple = str.length > 0 ? true : false;
        for (var i = 0; i < str.length; i++) {
            var contador = {
                "letra": str[i],
                "cantidad": str.split(str[i]).length - 1
            };
            if (contador.cantidad > 1) {
                cumple = false;
            }
            indices.push(contador);
        }
        result.cumple = cumple;
        result.caracteres = indices;
        return result;
    },
    b: function (str1, str2) {
        console.debug('palabras por analizar:' + str1 + ", " + str2, 'pregunta01.b');
        return {"palabra1": str1, "palabra2": str2, "contenida": permut(str1).includes(str2)};
    },
    c: function (matrix) {
        console.log(matrix);
        var tmatrix = matrix[0].map((col, i) => matrix.map(row => row[i]));
        console.log(tmatrix);
        return tmatrix;
    },
    b_response: function (str1, str2) {
        return permut(str1).includes(str2);
    },
    a_response: function (str) {
        for (var i = 0; i < str.length; i++) {
            if (str.split(str[i]).length - 1 > 1) {
                return false;
                break;
            }
        }
        return str.length > 0 ? true : false;
    }

};

function permut(string) {
    if (string.length < 2)
        return string;

    var permutations = [];
    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        if (string.indexOf(char) != i)
            continue;

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)
    }
    return permutations;
}

module.exports = {
    a: function (n) {

        return {"totalCombinatoria": obtenerCombinatorias(n)};

    },
    b: function () {
        return getSubArrays([1, 2, 3, 4, 5]);
    }
}

function obtenerCombinatorias(n) {
    var total = 0;
    //para 3 escalones
    var k = Math.trunc(n / 3);
    if (k > 0) {
        for (i = 1; i <= k; i++) {
            total++;
            if (n - i * 3 > 0) {
                total += obtenerCombinatorias(n - i * 3) - 1;
            }
        }
    }
    //para 2 escalones
    var l = Math.trunc(n / 2);
    if (l > 0) {
        for (i = 1; i <= l; i++) {
            total++;
            if (n - i * 2 > 0) {
                total += obtenerCombinatorias(n - i * 2) - 1;
            }
        }
    }
    // para 1 escalon
    if (n > 0) {
        total++;
    }
    return total;
}



function getSubArrays(arr) {
    var len = arr.length,
            subs = Array(Math.pow(2, len)).fill();
    return subs.map((_, i) => {
        var j = -1,
                k = i,
                res = [];
        while (++j < len) {
            k & 1 && res.push(arr[j]);
            k = k >> 1;
        }
        return res;
    }).slice(1);
}
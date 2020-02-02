module.exports = {
    a: function (node1, node2) {
        var matrix = [[0, 1, 0, 0], [0, 0, 1, 0], [1, 0, 0, 0], [0, 0, 1, 0]];
        
        var resp = {
            "matriz": matrix,
            "grafo": [{
                    "from": node1,
                    "to": node2,
                    "connected": matrix[node1][node2] ? true : false},
                {
                    "from": node2,
                    "to": node1,
                    "connected": matrix[node2][node1] ? true : false}],

        };
        return resp;
    }
};
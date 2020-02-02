const express = require('express');
const app = express();
var cors = require('cors');
var pregunta01 = require('./src/pregunta01');
var pregunta02 = require('./src/pregunta02');
var pregunta03 = require('./src/pregunta03');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Prueba de Selección Subgerencia Desarrollo Tecnológico Gerencia de Sistemas Retail Omnicanal'));

app.get('/pregunta01/a/:palabra', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = pregunta01.a(req.params.palabra);
   res.end(JSON.stringify(response));
});

app.get('/pregunta01/b/:palabra1/compare/:palabra2', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = pregunta01.b(req.params.palabra1, req.params.palabra2);
   res.end(JSON.stringify(response));
});

app.get('/pregunta01/c/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   //var matrix = [['a11', 'a12', 'a13', 'a14'], ['a21', 'a22', 'a23', 'a24'], ['a31', 'a32', 'a33', 'a34'], ['a41','a42','a43','a44']];
   var matrix = [['a11', 'a12'], ['a21', 'a22']];
   var response = pregunta01.c(matrix);
   res.end(JSON.stringify(response));
});

app.get('/pregunta02/a/', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = pregunta02.a();
   res.end(JSON.stringify(response));
});

app.get('/pregunta02/b/borrarPosicion/:posicionNodo', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = pregunta02.b(req.params.posicionNodo, true);
   res.end(JSON.stringify(response));
});

app.get('/pregunta02/b/borrarValor/:valorNodo', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = pregunta02.b(req.params.valorNodo);
   res.end(JSON.stringify(response));
});

app.get('/pregunta02/c/operacionSumaReversa', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = pregunta02.c();
   res.end(JSON.stringify(response));
});

app.get('/pregunta02/d/operacionSuma', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = pregunta02.c();
   res.end(JSON.stringify(response));
});

app.get('/pregunta03/a/:node1/connected/:node2', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = pregunta03.a(req.params.node1, req.params.node2);
   res.end(JSON.stringify(response));
});

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});

const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Prueba de Selección Subgerencia Desarrollo Tecnológico Gerencia de Sistemas Retail Omnicanal'));

app.get('/pregunta01/:palabra', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json'});
   var response = { "response" : "This is GET method with palabra=" + req.params.palabra + "." }
   res.end(JSON.stringify(response));
})

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});

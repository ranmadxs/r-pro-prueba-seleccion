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

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});

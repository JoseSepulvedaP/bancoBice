require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Se aceptan solo peticiones GET y POST desde front desplegado en Firebase.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.APP);
    res.header('Access-Control-Allow-Headers', 'token, Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Allow', 'GET');
    next();
});

app.use(require('./routes/indecon'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor Online en puerto ${process.env.PORT}`);
});

module.exports = app;
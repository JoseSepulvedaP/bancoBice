const express = require('express');
const request = require('request');
const app = express();
const { validateKey } = require('../middlewares/validateKey');

/** 
 * API que entrega los últimos valores de todos los elementos
*/
app.get('/last', (req, res) => {
    request(`${process.env.API_IDECON}/last`, (err, response) => {
        if (!err && response.statusCode === 200) {
            const { body } = response;
            const data = JSON.parse(body);
            console.log(data);
            return res.json({
                ok: true,
                data
            });
        } else {
            return res.status(response.statusCode).json({
                ok: false,
                err: {
                    message: 'No se pudieron obtener los últimos valores de todos los elementos'
                }
            });
        }
    });
});

/** 
 * API que entrega todos los valores de un elemento particular
*/
app.get('/values/:key', validateKey, (req, res) => {
    const { key } = req.params;
    request(`${process.env.API_IDECON}/values/${key}`, (err, response) => {
        if (!err && response.statusCode === 200) {
            const { body } = response;
            const data = JSON.parse(body);
            return res.json({
                ok: true,
                data
            });
        } else {
            return res.status(response.statusCode).json({
                ok: false,
                err: {
                    message: `No se pudieron obtener los valores del elemento ${key}`
                }
            });
        }
    });
});

/** 
 * API que entrega el valor de un elemento particular en una fecha en particular
*/
app.get('/date/:key/:date',  validateKey, (req, res) => {
    const { key, date } = req.params;
    request(`${process.env.API_IDECON}/date/${key}/${date}`, (err, response) => {
        if (!err && response.statusCode === 200) {
            const { body } = response;
            const data = JSON.parse(body);
            return res.json({
                ok: true,
                data
            });
        } else {
            return res.status(response.statusCode).json({
                ok: false,
                err: {
                    message: `No se pudieron obtener los valores del elemento ${key} para la fecha ${date}`
                }
            });
        }
    });
});

module.exports = app;
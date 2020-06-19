'use strict'
 var request = require('supertest');
 var app = require('../server');

describe('GET /last', () => {
    it('API that delivers the last values ​​of all the elements', (done) => {
    request(app)
        .get('/last')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET /values/:key', () => {
    it('API that delivers all the values ​​of a particular element', (done) => {
    request(app)
        .get('/values/oro')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET /date/:key/:date', () => {
    it('API that delivers the value of a particular item on a particular date', (done) => {
    request(app)
        .get('/date/plata/01-01-2020')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
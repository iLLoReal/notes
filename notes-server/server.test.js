const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
    it('GET / should display "hello world"', () => {
        return request(server)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual("hello world");
            })
    })
})
import request from 'supertest';
import server from './server';
import { describe, expect, test } from '@jest/globals';


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
    it('GET /notes should display "all the notes"', () => {
        return request(server)
            .get('/notes')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual("all the notes");
            })
    } )
})

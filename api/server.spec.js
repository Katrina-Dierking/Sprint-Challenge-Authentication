const request = require('supertest');
const server = require('./server');

const db = require('../database/dbConfig');

describe('the server', () => {
    // beforeEach(async() => {
    //     await db('users').truncate();
    // });

    describe('GET /', () => {
        it ('should ruturn status 200', () => {
            return request (server).post('/api/auth/register')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        })

        it('should return the correct object', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.type).toBe('application/json');
                    expect(res.body).toBeEqual({api:'up'});
                });
        });

        it('should return {"text"}', () => {
            // make a GET request to /
            return request(server).get('/api/jokes')
                .then(res => {
                // check that the status code is 200
             expect(res.body).toStrictEqual
             ({ "you" : "are in the wrong place at the wrong time"}) 
        });
    });
})

})
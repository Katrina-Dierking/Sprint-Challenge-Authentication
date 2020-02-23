const request = require('supertest');
// const router = require('./auth-router');

const server = require('../api/server');
const db = require('../database/dbConfig');

describe ('This is a restful database', () => {
    beforeEach(async () => { 
		await  db('users').truncate();
});

    describe ('Post/register', () => {
        it('should return status 200', () => { 
        request(server)
            .post('/api/auth/register')
            .send({username: 'Erica', password: 'yes'})
            .expect(201);
        })

        it ('should return a json obj', () => {
            request(server)
            .post('/api/auth/register')
            .send({username: 'Erica', password: 'yes'})
            .expect('content-type', /json/)
        })
    });

    describe ('Post/login', () => {
        it('should return a 200 response', async() => {
            request(server)
                .post('/api/auth/login')
                .send({username: 'Erica', password: 'yes'})
                .expect(200)
        })

        it ('should return a json obj', () => {
            request(server)
            .post('/api/auth/login')
            .send({username:'Erica', password: 'yes'})
            .expect('content-type', /json/)
        })
    })

    describe('GET /', () => {
        it ('should return a 401 response', () => {
            request(server)
                .get('/api/auth')
                .expect(401)
        })

        // it ('should return a 200 response', () => {
        //     token = res.body.token;
        //     request(server)
        //         .get('/api/auth')
        //         .set('authorization', token)
        //         .expect(200)
        // })
    });
});
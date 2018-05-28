process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Category', () => {
    it('it should get a category', (done) => {
        chai.request(server)
        .post('/')
        //.type('form')
        .send({url: 'www.imdb.com'})
        .end((err, res) => {
            JSON.parse(res.text).should.be.a('array');
            done();
        });
    });

    it('it should fail getting a category', (done) => {
        chai.request(server)
        .post('/')
        //.type('form')
        .send({url: 'www.iqbebe.ro'})
        .end((err, res) => {
            res.body.error.should.be.a('string');
            done();
        });
    });
})
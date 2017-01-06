var server = require('supertest');
describe('API', function() {
  var server;
  beforeEach(function(){
    server = require('../src/server.js');
  });
  afterEach(function(){
    server.close();
  });
  it('/Please Work', function testapi(done) {
    request(server)
    .get('/api/')
    .set('Accept', 'application/json')
    .expect('Content-Type' , /json/)
    .expect(200, done);
});
    it('/Pretty Please Work', function testapi(done) {
      request(server)
      .get('/api/string')
      .set('Accept', 'application/json')
      .expect('Content-Type' , /json/)
      .expect(200, done);
  });
});

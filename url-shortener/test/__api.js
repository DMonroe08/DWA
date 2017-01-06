var server = require('supertest');

describe('api', function() {
  server = require('supertest');
  
  it('/ status', function testapi(done) {
    request(server)
    .get('/api/')
    .set('Accept', 'application/json')
    .expect('Content-Type' , /json/)
    .expect(200, done);
});
    it('/ string Please Work', function testapi(done) {
      request(server)
      .get('/api/string')
      .set('Accept', 'application/json')
      .expect('Content-Type' , /json/)
      .expect(200, done);
  });
});

/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe("Offices", () => {
  describe("GET /offices", () => {
    it("should get all offices", (done) => {
      chai.request(app).get('/api/v1/offices').end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
    });
    it("should get a single office if id is found", (done) => {
      const id = 2;
      chai.request(app).get(`/api/v1/offices/${id}`).end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
    });
    it("should not get a single office if id is not found", (done) => {
      const id = 6;
      chai.request(app).get(`/api/v1/offices/${id}`).end((err, res) => {
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
    });
  });

  describe("POST /offices", () => {
    it("should post an office with all required fields", (done) => {
      const office = [
        {
          name: 'Village Head',
          type: 'LGA',
        },
      ];
      chai.request(app).post('/api/v1/offices').set('Accept', 'application/x-www-form-urlencoded').send(office).end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
    });
  });
});

/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe("Parties", () => {
  describe("GET /parties", () => {
    it("should get all parties", (done) => {
      chai.request(app).get('/api/v1/parties').end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
    });
    it("should get a single party if id is found", (done) => {
      const id = 2;
      chai.request(app).get(`/api/v1/parties/${id}`).end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
    });
    it("should not get a single party if id is not found", (done) => {
      const id = 6;
      chai.request(app).get(`/api/v1/parties/${id}`).end((err, res) => {
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
    });
  });

  describe("POST /parties", () => {
    it("should post a party with all required fields", (done) => {
      const party = [
        {
          name: 'All Peoples Grand Alliance',
          hqAddress: 'Rivers',
        },
      ];
      chai.request(app).post('/api/v1/parties').set('Accept', 'application/x-www-form-urlencoded').send(party).end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe("PATCH /parties", () => {
    it("should edit a party", (done) => {
      const id = 1;
      const party = [
        {
          id: 1,
          name: 'All Peoples Grand Alliance',
          hqAddress: 'Rivers',
        },
      ];
      chai.request(app).patch(`/api/v1/parties/${id}`).set('Accept', 'application/x-www-form-urlencoded').send(party).end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe("DELETE /parties", () => {
    it("should delete a party", (done) => {
      const id = 1;
      const party = [
        {
          id: 1,
          name: 'All Peoples Grand Alliance',
          hqAddress: 'Rivers',
        },
      ];
      chai.request(app).delete(`/api/v1/parties/${id}`).set('Accept', 'application/x-www-form-urlencoded').send(party).end((err, res) => {
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.should.be.a('object');
        done();
      });
    });
  });
});

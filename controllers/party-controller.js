import parties from '../models/party-db';

const partyData = parties;

const getParties = (req, res) => {
  const allParties = partyData;
  return res.send({
    "status": 200,
    "data": allParties,
  });
};

const getParty = (req, res) => {
  if (!req.params.id) return res.send({ "status": 400, "error": "Party id is required" });
  const id = parseInt(req.params.id, 10);
  const singleParty = partyData.find(party => party.id === id);

  if (!singleParty) {
    return res.send({
      "status": 404,
      "error": "Party with given id not found",
    });
  }
  return res.send({
    "status": 200,
    "data": singleParty,
  });
};

const createParty = (req, res) => {
  // validate all required fields
  // if (!req.body.id) return res.send({ "status": 400, "error": "Party Id is required" });
  req.body.id = partyData.length + 1;
  partyData.push(req.body);
  return res.send({ "status": 200, "data": partyData });

  if (!req.body.name) {
    return res.send({ "status": 400, "error": "Party name is required" });
  }
  if (!req.body.hqAddress) {
    return res.send({ "status": 400, "error": "Party Headquarters Address is required" });
  }
};

const editParty = (req, res) => {
  if (!req.params.id) return res.send({ "status": 400, "error": "Party id is required" });
  const id = parseInt(req.params.id, 10);
  const singleParty = partyData.find(party => party.id === id);

  if (!singleParty) {
    return res.send({
      "status": 404,
      "error": "Party with given id not found",
    });
  }

  if (req.body.name) singleParty.name = req.body.name;
  if (req.body.hqAddress) singleParty.hqAddress = req.body.hqAddress;
  return res.send({
    "status": 200,
    "data": singleParty,
  });
};

const deleteParty = (req, res) => {
  if (!req.params.id) return res.send({ "status": 400, "error": "Party id is required" });
  const id = parseInt(req.params.id, 10);
  const singleParty = partyData.find(party => party.id === id);
  if (!singleParty) return res.send({ "status": 404, "error": "Party with given id not found" });
  const deletedParty = partyData.splice(singleParty, 1);
  return res.send({ "status": 200, "data": deletedParty });
};

const partyController = {
  getParties,
  getParty,
  createParty,
  editParty,
  deleteParty,
};

export default partyController;

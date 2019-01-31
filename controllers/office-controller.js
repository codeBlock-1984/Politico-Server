import offices from '../models/office-db';

const officeData = offices;

const getOffices = (req, res) => {
  const allOffices = officeData;
  return res.send({
    "status": 200,
    "data": allOffices,
  });
};

const getOffice = (req, res) => {
  if (!req.params.id) return res.send({ "status": 400,  "error": "Office id is required" });
  const id = parseInt(req.params.id, 10);
  const singleOffice = officeData.find(office => office.id === id);

  if (!singleOffice) {
    return res.send({
      "status": 404,
      "error": "Office with given id not found",
    });
  }
  return res.send({
    "status": 200,
    "data": singleOffice,
  });
};

const createOffice = (req, res) => {
  req.body.id = officeData.length + 1;
  officeData.push(req.body);
  return res.send({ "status": 200, "data": officeData });
  // validate all required fields
  // if (!req.body.id) return res.send({ "status": 400, "error": "Office Id is required" });
  if (!req.body.name) {
    return res.send({ "status": 400, "error": "Office name is required" });
  }
  if (!req.body.type) {
    return res.send({ "status": 400, "error": "Office type is required" });
  }

};

const officeController = {
  getOffices,
  getOffice,
  createOffice,
};
export default officeController;

const data = require("../models/Flight");
exports.getAllFlights = (req, res) => {
  console.log("example");
  res.send(data);
};

exports.addFlight = (req, res) => {
  const newFlight = req.body;
  if (newFlight) {
    newFlight.id = data.exampleModel.length;
    data.exampleModel.push(newFlight);
    res.send("success");
  } else {
    throw new Error("Failed");
  }
  console.log(newFlight);
};

exports.getSingleFlight = (req, res) => {
  const { params } = req;
  const flight = data.exampleModel.find((x) => x.id === Number(params.id));
  res.send(flight);
  //   res.end();
};

exports.deleteFlight = (req, res) => {
  const { params } = req;
  const flight = data.exampleModel.filter((x) => x.id !== Number(params.id));
  if (flight) {
    res.send("deleted");
  } else {
    res.send("Error");
  }
};

exports.updateFlight = (req, res) => {
  const { params } = req;
  console.log(req.body);
  const updated = data.exampleModel.map((x) => {
    if (x.id === Number(params.id)) {
      return { ...x, ...req.body };
    }
    return x;
  });
  data.exampleModel = updated;
  res.end();
};

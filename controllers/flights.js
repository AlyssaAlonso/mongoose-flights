const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render("flights/index", { title: "All Flights", flights });
}

async function newFlight(req, res) {
  res.render("flights/new", { title: "New Flight Info", errorMsg: "" });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    const newFlight = await Flight.create(req.body);
    res.redirect("flights");
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id }).exec();
    res.render("flights/show", { title: "Flight Details", flight, tickets });
  } catch (err) {
    console.log(err);
  }
}

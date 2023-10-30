const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

function newTicket(req, res) {
  const flightID = req.params.id;
  res.render("flights/tickets/new", {
    title: "New Ticket",
    errorMsg: "",
    flightID,
  });
}

async function create(req, res) {
  const flightID = req.params.id;

  try {
    const newTicket = await Ticket.create({
      ...req.body,
      flight: flightID,
    });
    console.log(newTicket);
    res.redirect(`/flights/${flightID}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  new: newTicket,
  create,
};

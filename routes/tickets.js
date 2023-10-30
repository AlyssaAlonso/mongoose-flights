const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

// This router is mounted to a "starts with" path of '/'

// GET /tickets/new (new functionality)
router.get("/flights/:id/tickets/new", ticketsCtrl.new);

// POST /flights/:id/tickets (create functionality)
router.post("/flights/:id", ticketsCtrl.create);

module.exports = router;

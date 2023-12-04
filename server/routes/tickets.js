const express = require("express");
const router = express.Router();
const { Ticket } = require("../models");

// Route to handle ticket creation
router.post("/create-ticket", async (req, res) => {
  try {
    // Retrieve form data from the request body
    const {
      ticketname,
      ticketspot,
      ticketcontact,
      ticketemail,
      ticketvehicle,
      userId,
    } = req.body;

    // Insert ticket details into the database using Sequelize
    const newTicket = await Ticket.create({
      ticketname,
      ticketspot,
      ticketcontact,
      ticketemail,
      ticketvehicle,
      UserId: userId, // Associate ticket with the user
    });

    res.status(201).json(newTicket);
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ error: "Failed to create ticket" });
  }
});

module.exports = router;

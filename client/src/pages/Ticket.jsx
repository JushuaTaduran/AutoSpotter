import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TicketDetails from "../components/TicketDetails";
import TicketForm from "../components/TicketForm";

const Ticket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ticketCreated, setTicketCreated] = useState(false);

  // Function to handle form submission
  const handleFormSubmit = async (formData) => {
    try {
      // Simulated ticket creation
      setTicketCreated(true);

      // Make a POST request to your server to create the ticket
      const response = await fetch(
        "http://localhost:8001/tickets/create-ticket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Ticket created successfully
        const newTicket = await response.json();
        console.log("New ticket created:", newTicket);
      } else {
        console.error("Failed to create ticket");
      }
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  return (
    <div>
      {ticketCreated ? (
        <TicketDetails /> // Display ticket details if ticket is created
      ) : (
        <TicketForm onSubmit={handleFormSubmit} userId={userId} />
      )}
    </div>
  );
};

export default Ticket;

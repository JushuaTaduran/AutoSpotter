import React, { useState } from "react";

const TicketForm = ({ onSubmit, userId }) => {
  const [formData, setFormData] = useState({
    ticketname: "",
    ticketspot: "",
    ticketcontact: "",
    ticketemail: "",
    ticketvehicle: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataWithUserId = {
      ...formData,
      userId: userId, // Use the userId received as a prop
    };
    onSubmit(dataWithUserId);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center px-12 w-full h-[40vh] lg:h-[30vh]">
        <h1 className="font-bold text-5xl mb-12 lg:mx-auto lg:text-center">
          Create Your <br />
          Ticket
        </h1>
        <p className="mx-auto">
          Create your ticket where until you come back or until given duration
          of your time. Make sure you have your Payment Method set.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ticketname">Name:</label>
          <input
            type="text"
            id="ticketname"
            name="ticketname"
            value={formData.ticketname}
            onChange={handleChange}
            className="px-4 py-2 border-2 border-solid border-black block"
          />
        </div>
        <div>
          <label htmlFor="ticketspot">Parking Spot:</label>
          <input
            type="text"
            id="ticketspot"
            name="ticketspot"
            value={formData.ticketspot}
            onChange={handleChange}
            className="px-4 py-2 border-2 border-solid border-black block"
          />
        </div>
        <div>
          <label htmlFor="ticketemail">Email:</label>
          <input
            type="text"
            id="ticketemail"
            name="ticketemail"
            value={formData.ticketemail}
            onChange={handleChange}
            className="px-4 py-2 border-2 border-solid border-black block"
          />
        </div>
        <div>
          <label htmlFor="ticketcontact">Contact:</label>
          <input
            type="text"
            id="ticketcontact"
            name="ticketcontact"
            value={formData.ticketcontact}
            onChange={handleChange}
            className="px-4 py-2 border-2 border-solid border-black block"
          />
        </div>
        <div>
          <label htmlFor="ticketvehicle">Vehicle:</label>
          <input
            type="text"
            id="ticketvehicle"
            name="ticketvehicle"
            value={formData.ticketvehicle}
            onChange={handleChange}
            className="px-4 py-2 border-2 border-solid border-black block"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full h-12 rounded mb-10"
        >
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;

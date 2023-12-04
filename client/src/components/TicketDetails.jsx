import React from "react";
import qr from "../assets/ticket/qr.png";

const TicketDetails = ({ ticketId, parkingSpot, contact, name, vehicle }) => {
  return (
    <div className="w-full h-full p-12">
      <div className="h-full w-full rounded-xl border-2 border-solid border-black px-12 py-8 mb-2">
        <h2 className="text-center border-b-2 border-black mb-2 pb-2">
          Reserved Successfully
        </h2>
        <div>
          <div className="flex justify-between">
            <h4>Parking Spot:</h4>
            <p>{parkingSpot}</p>
          </div>
          <div className="flex justify-between">
            <h4>Payment:</h4>
            <p>P 250</p>
          </div>
        </div>
      </div>
      <div className="h-full w-full rounded-xl border-2 border-solid border-black px-12 py-8 mb-2">
        <h2 className="text-center">Ticket Id: {ticketId}</h2>
        <img src={qr} alt="qr" />
        <p>Scan for Payment transaction</p>
      </div>
      <div className="h-full w-full rounded-xl border-2 border-solid border-black px-12 py-8">
        <h2 className="text-center">Ticket Details</h2>
        <p>
          Parking Spot# {parkingSpot}, Contact #: {contact}, Name: {name},
          Vehicle: {vehicle}
        </p>
      </div>
    </div>
  );
};

export default TicketDetails;

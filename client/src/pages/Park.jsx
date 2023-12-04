import React from "react";
import Nav from "../components/Nav";
import ParkingModule from "../components/parkingModule";

const Park = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center px-12 w-full h-[40vh] lg:h-[30vh]">
        <h1 className="font-bold text-5xl mb-12 lg:mx-auto lg:text-center">
          Parking Spaces
        </h1>
        <p className="mx-auto">
          Head to available parking spot then click what spot are you in.
          Lastly, add details for the ticket
        </p>
      </div>
      <ParkingModule />
      <a
        href="#"
        className="flex items-center justify-center rounded w-72 h-12 text-white bg-[#006BFF] text-center mx-auto"
      >
        Confirm Parking Spot
      </a>
    </div>
  );
};

export default Park;

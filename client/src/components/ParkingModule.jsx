import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

const ParkingModule = () => {
  const [parkingStatus, setParkingStatus] = useState(Array(8).fill(0)); // Initialize with 8 parking spaces not occupied
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    const socket = io("http://localhost:8001", { transports: ["websocket"] });

    // Listen for WebSocket events for parking status changes
    socket.on("parkingStatusUpdate", (updatedStatus) => {
      setParkingStatus(updatedStatus);
    });

    // Clean up WebSocket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleParkingSpotClick = (index) => {
    if (parkingStatus[index] === 0) {
      // If the spot is available, navigate to the ticket route and pass necessary data
      navigate("/ticket", {
        state: {
          spotNumber: index + 1, // Spot number clicked (1-indexed)
          // Other necessary data for the ticket creation can be passed here
        },
      });
    }
  };

  return (
    <div className="grid grid-cols-2 mb-24">
      {parkingStatus.map((status, index) => (
        <div
          className={`w-32 h-12 mx-12 my-2 lg:mx-40 lg:w-48 lg:h-20 relative transform ${
            index % 2 !== 0 ? "scale-x-[-1]" : "scale-x-1"
          }`}
          key={index}
          onClick={() => handleParkingSpotClick(index)}
          style={{ cursor: status === 0 ? "pointer" : "default" }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              status === 1
                ? "from-red-400 to-red-100"
                : "from-gray-400 to-transparent"
            } border-2 border-r-0 flex justify-center items-center`}
            style={{
              borderImage: "linear-gradient(to right, black, transparent)",
              borderImageSlice: "1",
            }}
          >
            <h3 className={`${index % 2 !== 0 ? "scale-x-[-1]" : "scale-x-1"}`}>
              {`Park00${index + 1}`}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParkingModule;

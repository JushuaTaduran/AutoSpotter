import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/UserContext";

const Profile = () => {
  const { loggedInUserDetails, setLoggedInUserDetails } =
    useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    vehicle: "",
    image: "", // Assuming you're displaying an image as well
  });

  useEffect(() => {
    // Populate form data with user details upon component mount
    if (loggedInUserDetails) {
      setFormData({
        name: loggedInUserDetails.name || "",
        contact: loggedInUserDetails.contact || "",
        email: loggedInUserDetails.email || "",
        vehicle: loggedInUserDetails.vehicle || "",
        image: loggedInUserDetails.image || "",
      });
    }
  }, [loggedInUserDetails]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImageUpload = async (e) => {};

  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...formData, userId }; // Include userId in the payload
      const response = await fetch("http://localhost:8001/userdetails/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        console.log("User details updated successfully!");
      } else {
        console.error("Failed to update user details");
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleImageChange = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const response = await fetch("http://localhost:8001/userdetails/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded:", data.imageUrl);
        // Update the image URL in your profile state or component
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const [nameFocused, setNameFocused] = useState(false);
  const [contactFocused, setContactFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [vehicleFocused, setVehicleFocused] = useState(false);

  const handleNameFocus = () => {
    setNameFocused(true);
  };

  const handleNameBlur = (e) => {
    if (!e.target.value) {
      setNameFocused(false);
    }
  };

  const handleContactFocus = () => {
    setContactFocused(true);
  };

  const handleContactBlur = (e) => {
    if (!e.target.value) {
      setContactFocused(false);
    }
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleEmailBlur = (e) => {
    if (!e.target.value) {
      setEmailFocused(false);
    }
  };

  const handleVehicleFocus = () => {
    setVehicleFocused(true);
  };

  const handleVehicleBlur = (e) => {
    if (!e.target.value) {
      setVehicleFocused(false);
    }
  };

  return (
    <div className="w-full h-full">
      <div>
        <img src={formData.image} alt="User" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mb-6 flex flex-col relative ">
            <label
              htmlFor="name"
              className={`${
                nameFocused ? "text-blue-500 -translate-y-4 text-sm" : ""
              } transition-transform transform-gpu duration-300 absolute px-3`}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder=" "
              value={formData.name}
              required
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              onChange={handleChange}
              className="block w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-border duration-300 px-3 py-1"
            />
          </div>
          <div className="mb-6 flex flex-col relative ">
            <label
              htmlFor="contact"
              className={`${
                contactFocused ? "text-blue-500 -translate-y-4 text-sm" : ""
              } transition-transform transform-gpu duration-300 absolute px-3`}
            >
              Contact
            </label>
            <input
              id="contact"
              type="text"
              placeholder=" "
              value={formData.contact}
              required
              onFocus={handleContactFocus}
              onBlur={handleContactBlur}
              onChange={handleChange}
              className="block w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-border duration-300 px-3 py-1"
            />
          </div>
          <div className="mb-6 flex flex-col relative ">
            <label
              htmlFor="email"
              className={`${
                emailFocused ? "text-blue-500 -translate-y-4 text-sm" : ""
              } transition-transform transform-gpu duration-300 absolute px-3`}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder=" "
              value={formData.email}
              required
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              onChange={handleChange}
              className="block w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-border duration-300 px-3 py-1"
            />
          </div>
          <div className="mb-6 flex flex-col relative ">
            <label
              htmlFor="vehicle"
              className={`${
                vehicleFocused ? "text-blue-500 -translate-y-4 text-sm" : ""
              } transition-transform transform-gpu duration-300 absolute px-3`}
            >
              Vehicle
            </label>
            <input
              id="vehicle"
              type="text"
              placeholder=" "
              value={formData.vehicle}
              required
              onFocus={handleVehicleFocus}
              onBlur={handleVehicleBlur}
              onChange={handleChange}
              className="block w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-border duration-300 px-3 py-1"
            />
          </div>
        </div>
        <div>
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full h-12 rounded mb-10"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

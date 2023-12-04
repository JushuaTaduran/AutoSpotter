import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Landing from "./pages/Landing";
import Park from "./pages/Park";
import Ticket from "./pages/Ticket";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import TicketDetails from "./components/TicketDetails";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/park" element={<Park />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticket/details" element={<TicketDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;

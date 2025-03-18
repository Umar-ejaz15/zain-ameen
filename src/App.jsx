import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MouseFollow from "./components/Mousefollow";
import LocomotiveScroll from "locomotive-scroll";
import Page1 from "./pages/Page1";
import NotAvailable from "./components/NotAvailable";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <MouseFollow />
      <Routes>
        <Route path="/" element={<Page1 />} />
        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotAvailable />} />
      </Routes>
    </Router>
  );
};

export default App;
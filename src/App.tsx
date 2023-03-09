import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/login";
import OfferForm from "./pages/carpooler/offerForm";
import Details from "./pages/carpooler/details";
import Dashboard from "./pages/Client/dashboard";



function App() {
  return (
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/offerForm" element={<OfferForm />} />
        <Route path="/detailOffer" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />



      </Routes>
  );
}

export default App;

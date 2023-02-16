import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/login";
import Layout from "./components/layout";
import OfferForm from "./pages/carpooler/offerForm";
import Details from "./pages/carpooler/details";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/nav" element={<Layout />} />
        <Route path="/offerForm" element={<OfferForm />} />
        <Route path="/detailOffer" element={<Details />} />



      </Routes>
  );
}

export default App;

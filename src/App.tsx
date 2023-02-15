import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/login";
import Layout from "./components/layout";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/nav" element={<Layout />} />

      </Routes>
  );
}

export default App;

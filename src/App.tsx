import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/login";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Auth />} />
      </Routes>
  );
}

export default App;

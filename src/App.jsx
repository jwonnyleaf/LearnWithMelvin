import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

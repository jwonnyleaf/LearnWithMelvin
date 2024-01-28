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
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

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

import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    eerieblack: {
      main: "#242424",
    },
    melon: {
      main: "#ffa69e",
    },
    ashgreen: {
      main: "#aac0aa",
    },
    jasmine: {
      main: "#f9da8b",
    },
    platinum: {
      main: "#efefef",
    },
  },
});

theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {},
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& input": {
          color: theme.palette.platinum.main,
        },
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

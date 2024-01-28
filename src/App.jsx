import { React, useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Loader from "./components/Loader";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";

import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    eerieblack: {
      main: "#242424",
    },
    melon: {
      main: "#e68f87",
    },
    ashgreen: {
      main: "#81a981",
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
      root: {
        backgroundColor: theme.palette.melon.main,
        "&:hover": {
          backgroundColor: theme.palette.ashgreen.main,
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& input": {
          color: theme.palette.platinum.main,
        },
        "& label.Mui-focused": {
          color: theme.palette.jasmine.main,
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.jasmine.main,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.jasmine.main, // Change border color on hover
          },
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: theme.palette.platinum.main,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "& fieldset": {
          borderColor: theme.palette.platinum.main,
        },
        "&:hover fieldset": {
          borderColor: theme.palette.jasmine.main, // Change border color on hover
        },
      },
    },
  },
};

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          {loading && <Loader />}
          <Routes>
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />

            {/* Unprotected Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;

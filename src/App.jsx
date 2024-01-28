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
import PartOne from "./components/Challenge1/PartOne";
import PartTwo from "./components/Challenge1/PartTwo";
import PartThree from"./components/Challenge1/PartThree";

import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    black: {
      main: "#000000",
    },
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
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
        webkitTapHighlightColor: "transparent",
      },
      normal: {
        backgroundColor: theme.palette.melon.main,
        color: theme.palette.black.main,
        fontFamily: "Montserrat",
        fontWeight: "bold",
        padding: "10px 30px",
        borderRadius: "5px",
        border: "1px solid #efefef",
        "&:hover": {
          backgroundColor: theme.palette.melon.main,
          borderRadius: "25px",
          color: theme.palette.eerieblack.main,
        },
      },
      blank: {
        color: theme.palette.platinum.main,
        fontFamily: "Montserrat",
        fontWeight: "bold",
        padding: "10px 30px",
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

            {/* Unprotected Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/taskonepartone" element={<PartOne />} />
            <Route path="/taskoneparttwo" element={<PartTwo />} />
            <Route path="/taskonepartthree" element={<PartThree />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;

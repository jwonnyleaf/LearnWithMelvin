import React from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import { Logo } from "../../assets";

function Home() {
  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="logo" />
      </div>
      <h1>Learn with Melvin ʕっ•ᴥ•ʔっ</h1>
      <div>
        <span> </span>
        <Button variant="contained" color="success" href="/about">
          About
        </Button>
        <span> </span>
        <Button variant="contained" color="success" href="/signin">
          Sign In
        </Button>
        <span> </span>
        <Button variant="contained" color="success" href="/signup">
          Sign Up
        </Button>
        <p>
          <code>
            Unlocking Futures with Melvin: Play, Learn, and Grow in the World of
            STEM
          </code>
        </p>
      </div>
    </>
  );
}

export default Home;

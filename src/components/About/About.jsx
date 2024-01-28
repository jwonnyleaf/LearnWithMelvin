import React from "react";
import Button from "@mui/material/Button";
import { useUserAuth } from "../../contexts/AuthContext";

const About = () => {
  const { signOut } = useUserAuth();
  return (
    <>
      <div>
        <h1>Hello</h1>
        <Button variant="contained" color="success" href="./">
          About
        </Button>
        {/* Sign Out Button */}
        <Button variant="contained" color="success" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    </>
  );
};

export default About;

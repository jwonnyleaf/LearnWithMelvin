import React from "react";
import Button from "@mui/material/Button";
import { useUserAuth } from "../../contexts/AuthContext";
import { Logo, FNAFBear } from "../../assets";

import "./PartOne.css";

const PartOne = () => {
  const { signOut } = useUserAuth();
  return (
    <>
      <div>
        <h1>Task 1: Help Melvin Escape the Animatronic ᕦʕ •ᴥ•ʔᕤ</h1>
      </div>
      <p class="text-left">
        <h3>
          Howdy! It’s seems like you’re the only one that can hear me..{" "}
          <br></br>
          You need to help me escape this place! I am currently stuck in this{" "}
          <br></br>
          pizza parlor and I keep hearing these footsteps outside of this room.
          I need <br></br>
          to survive this place to make it back home
        </h3>
        <h5>
          Please help Melvin avoid and disable the animatronic to survive the
          night! Enter a room to explore the facility however beware! There may
          be a foe behind the door.
        </h5>
        <hr></hr>
      </p>
      <div className="answer-button-container">
        <img src={Logo} className="partonelogo" rounded></img>
        <Button variant="contained" color="ashgreen">
          <h2>ROOM ONE</h2>
        </Button>
        <span> </span>
        <Button
          variant="contained"
          className="answer-button"
          color="ashgreen"
          href="./taskoneparttwo"
        >
          <h2>ROOM TWO</h2>
        </Button>
        <span> </span>
        <Button variant="contained" color="ashgreen">
          <h2>ROOM THREE</h2>
        </Button>
        <img src={FNAFBear} className="partonefnaf" rounded></img>
      </div>
    </>
  );
};

export default PartOne;

import React from "react";
import Button from "@mui/material/Button";
import { useUserAuth } from "../../contexts/AuthContext";
import { Logo, FNAFBear } from "../../assets";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import "./PartTwo.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.platinum,
}));

const PartTwo = () => {
  const { signOut } = useUserAuth();
  return (
    <>
      <div>
        <h1>Task 1: Help Melvin Escape the Animatronic ᕦʕ •ᴥ•ʔᕤ</h1>
      </div>
      <h3>
        Congratulations, you avoided the animatronic that is wondering the
        halls. Scary right? <br></br>
        Now, according to the database, this room is the loaction of the master
        code
      </h3>
      <h5>
        Search the room and help Melvin find the the code to disable the
        animatronic before it arrives!
      </h5>
      <hr></hr>
      <br />
      <Box sx={{ flexGrow: 1 }} className="p2-prompt-container">
        <Grid container spacing={3}>
          <Grid xs={4}>
            <Item>
              <h2>
                d1sa8l3(mastercode_disable_golden_bear_notpossession)
              </h2>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <h2>melvin's spirit was about to possess the golden bear :O</h2>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <h2>the master code is at the left of the room</h2>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <br></br>
      <Button variant="contained" color="ashgreen" href="./taskonepartthree">
        <h2>TABLET (CLICK HERE TO ENTER MASTER CODE)</h2>
      </Button>
      <br></br>
      <br></br>
      <img src={FNAFBear} className="parttwofnaf" rounded></img>
    </>
  );
};

export default PartTwo;

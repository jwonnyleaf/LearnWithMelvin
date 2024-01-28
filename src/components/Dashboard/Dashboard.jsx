import React from "react";
import {
  Container,
  Box,
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import PrimarySearchAppBar from "../../components/Navbar/Navbar";
import { Logo, C1BG } from "../../assets";
import "./Dashboard.css";

function hide() {
  document.getElementById("div1").style.display = "none";
  document.getElementById("div2").style.display = "none";
  document.getElementById("div3").style.display = "none";
}

function Dashboard() {
  return (
    <section className="section-container">
      <Grid container spacing={1} width={"100vw"} height={"100vh"}>
        <Grid item xs={4}>
          <Grid
            container
            spacing={3}
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
            height="100vh"
            style={{ backgroundColor: "#ffa69e" }}
          >
            <Grid item>
              <div id="div1" className="hiddendiv">
                <p style={{ color: "black" }}>
                  Task 1: Help Melvin Escape the Animatronic ʕ￫ᴥ￩ʔ
                </p>
                <Button
                  variant="contained"
                  color="success"
                  href="./taskonepartone"
                >
                  Go
                </Button>
              </div>
              <div id="div2" className="hiddendiv">
                <p style={{ color: "black" }}>Task 2 description</p>
                <Button variant="contained" color="success" href="./">
                  Go
                </Button>
              </div>
              <div id="div3" className="hiddendiv">
                <p style={{ color: "black" }}>Task 3 description</p>
                <Button variant="contained" color="success" href="./">
                  Go
                </Button>
              </div>
            </Grid>
            <Grid item>
              <img src={Logo} className="melvin" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <h1>Melvin's Missions</h1>
            </Grid>
            <Grid item xs={4} className="task-container">
              <div>
                <img src={C1BG} className="bg" />
                <div className="task-container--description">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      hide();
                      document.getElementById("div1").style.display = "block";
                    }}
                  >
                    Task 1
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={4} className="task-container">
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  hide();
                  document.getElementById("div2").style.display = "block";
                }}
              >
                Task 2
              </Button>
            </Grid>
            <Grid item xs={4} className="task-container">
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  hide();
                  document.getElementById("div3").style.display = "block";
                }}
              >
                Task 3
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default Dashboard;

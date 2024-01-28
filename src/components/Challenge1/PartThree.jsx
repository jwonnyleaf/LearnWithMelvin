import React from 'react';
import Button from '@mui/material/Button';
import { useUserAuth } from "../../contexts/AuthContext";
import { Logo } from "../../assets";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import "./PartThree.css"

const PartThree = () => {
    const { signOut } = useUserAuth();
    const [answer, setAnswer] = React.useState("");
    const [error, setError] = useState("");

    let navigate = useNavigate();

    const handleEnter = async (e) => {
        e.preventDefault();
        try {
            setError("");
            console.log(answer);
            if (answer === "d1sa8l3(mastercode_disable_golden_bear_notpossession)") {
                navigate("/Dashboard");
            }
            
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    };

    return (
        <>
            <div>
                <h1>Task 1: Help Melvin Escape the Animatronic ᕦʕ •ᴥ•ʔᕤ</h1>
            </div>
            <div className="text-left">
                <h3>PLEASE ENTER THE MASTER CODE TO COMPLETE THIS CHALLENGE</h3>
                <hr></hr>
            </div>
            <TextField
                required
                fullWidth
                id="answer"
                label="Please enter the code •ﻌ•"
                name="answer"
                autoComplete="answer"
                onChange={(e) => setAnswer(e.target.value)}
            />
            <br></br>
            <br></br>
            <Button onClick={(e) => {handleEnter(e)}} color="ashgreen" >ENTER</Button>
        </>
    );
};

export default PartThree;
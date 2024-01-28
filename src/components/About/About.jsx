import React from 'react';
import Button from '@mui/material/Button';
import { useUserAuth } from "../../contexts/AuthContext";
import { Logo } from "../../assets";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import "./About.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.eerieblack,
}));

const About = () => {
    const { signOut } = useUserAuth();
    return (
        <>
            <div>
                <h1>About Learning with Melvin ʕ •ᴥ•ʔ</h1>
                <Button variant="contained" color="ashgreen" href="./">
                    Home
                </Button>
                <span> </span>
                <Button variant="contained" color="ashgreen" href="./login">
                    Sign In
                </Button>
                <span> </span>
                <Button variant="contained" color="ashgreen" href="#contained-buttons">
                    Sign Up
                </Button>
                <p class="text-left">
                    Welcome to our CTF learning program where kids of all ages can <br></br>
                    learn how to problem solve through computer security puzzles. <br></br>
                    You can learn more about cybersecurity and the reverse-engineering <br></br>
                    users must implement to solve our challenges!
                    <hr></hr>
                </p>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid xs={4}>
                        <Item><h3>You’ll enjoy... <br></br>
                            Problem Solving <br></br>
                            Cryptography <br></br>
                            Competition <br></br></h3>
                        </Item>
                    </Grid>
                    <Grid xs={4}>
                        <Item><img src={Logo} className='aboutlogo' rounded></img></Item>
                    </Grid>
                    <Grid xs={4}>
                        <Item><h3>Howdy! I’m Melvin and I’ll help you learn about
                            information security. You will be tasked important
                            missions and must find flags <br></br> to earn points and
                            prizes. </h3></Item>
                    </Grid>
                </Grid>
            </Box>
            <p class="text-left">
                <hr></hr>
                In the rapidly evolving world of Science, Technology, Engineering, and Mathematics (STEM), <br></br>
                there is a critical need to engage the younger generation in these fields at an early age. <br></br>
                Our proposed solution is the development of an interactive web application that leverages <br></br>
                the engaging nature of Capture The Flag (CTF) based games. This platform, named 'LearnWithMelvin', <br></br>
                will feature a fantasy bear mascot that guides and motivates children through various STEM-focused <br></br>
                challenges and puzzles. The core objective of Melvin is to create a fun, immersive, and educational <br></br>
                experience that fosters a deep, lasting interest in STEM subjects.
            </p>
            <Button variant="contained" color="success" onClick={signOut}>Sign Out</Button>
            <br></br> <br></br>
            <img src={Logo} className='minimelvin' rounded></img>
            <img src={Logo} className='minimelvin' rounded></img>
            <img src={Logo} className='minimelvin' rounded></img>
        </>
    );
};

export default About;

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import logo from "../../assets/images/logo.png"
import './Home.css'

import * as React from 'react';
import Button from '@mui/material/Button';

function Home() {
  return (
    <>
      <div>
        <Row>
          <Col xs={6} md={4}>
            <Image src={logo} className='logo' rounded />
          </Col>
        </Row>
      </div>
      <h1>Learn with Melvin ʕっ•ᴥ•ʔっ</h1>
      <div>
        <span> </span>
        <Button variant="contained" color="success" href="./about">
          About
        </Button>
        <span> </span>
        <Button variant="contained" color="success" href="./login">
          Sign In
        </Button>
        <span> </span>
        <Button variant="contained" color="success" href="#contained-buttons">
          Sign Up
        </Button>
        <p>
          <code>Unlocking Futures with Melvin: Play, Learn, and Grow in the World of STEM</code>
        </p>
      </div>
    </>
  )
}

export default Home

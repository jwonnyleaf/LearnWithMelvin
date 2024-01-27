import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import logo from "./assets/images/logo.png"


function App() {
  const [count, setCount] = useState(0)

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
        <button onClick={() => setCount((count) => count + 1)}>
          Home {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          About {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Sign in {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Sign Up {count}
        </button>
        <p>
          <code>Unlocking Futures with Melvin: Play, Learn, and Grow in the World of STEM</code>
        </p>
      </div>
    </>
  )
}

export default App

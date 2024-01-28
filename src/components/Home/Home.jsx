import React from "react";
import { Unstable_Grid2 } from "@mui/material";
import "./Home.css";
import Button from "@mui/material/Button";
import { Logo } from "../../assets";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="section-container">
      <Unstable_Grid2
        container
        spacing={8}
        className="landing-title landing-main-grid"
      >
        <Unstable_Grid2 xs={7} className="landing-left-col">
          <h1 className="landing-title">Loved by children</h1>
          <h1 className="landing-title">Built for</h1>
          <div className="landing-typing-box">
            <Typewriter
              options={{
                strings: ["THE FUTURE", "STEM", "LEARNING", "FUN"],
                loop: true,
                autoStart: true,
                delay: 100,
                pauseFor: 2500,
              }}
            />
          </div>
          <div className="landing-description-box">
            You don't need a separate platform to teach cybersecurity, online
            privacy, or digital etiquette. The world's most engaging educational
            app is now the world's most comprehensive cyber-safety learning
            platform for children.
          </div>
          <div className="landing-button-box">
            <Button variant="normal" color="success" href="/signup">
              Start Free
            </Button>
            <Button disableRipple variant="normal" color="success" href="/about" class="learn-more-button">
              Learn More <span class="arrow">→</span>
            </Button>
          </div>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={5} className="landing-right-col">
          <img src={Logo} className="landing-logo" alt="logo" />
        </Unstable_Grid2>
      </Unstable_Grid2>
    </section>
    // <>
    //   <div>
    //     <img src={Logo} className="logo" alt="logo" />
    //   </div>
    //   <h1>Learn with Melvin ʕっ•ᴥ•ʔっ</h1>
    //   <div>
    //     <span> </span>
    //     <Button variant="contained" color="success" href="/about">
    //       About
    //     </Button>
    //     <span> </span>
    //     <Button variant="contained" color="success" href="/signin">
    //       Sign In
    //     </Button>
    //     <span> </span>
    //     <Button variant="contained" color="success" href="/signup">
    //       Sign Up
    //     </Button>
    //     <p>
    //       <code>
    //         Unlocking Futures with Melvin: Play, Learn, and Grow in the World of
    //         STEM
    //       </code>
    //     </p>
    //   </div>
    // </>
  );
}

export default Home;

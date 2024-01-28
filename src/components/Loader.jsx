import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import "./index.css"

const Loader = () => {
  return (
    <div className="spinner-container">
      <LinearProgress
        color="warning" // Sets the color of the progress bar
        variant="determinate" // Sets the variant to 'determinate'
        value={20} // Sets the current progress to 20%
        style={{ width: "60%", height: "10px" }} // Adjust size as needed
      />
    </div>
  );
};

export default Loader;

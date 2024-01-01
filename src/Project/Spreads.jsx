import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Spreads = () => {
  const navigate = useNavigate();
  const buttonStyle = {
    height: "250px",
    width: "350px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition:
      "margin 0.8s, border-radius 0.6s, box-shadow 0.8s, border-color 0.3s",
    position: "relative",
  };
  const handleButtonClick = (category) => {
    navigate(`/products/${category}`);
  };
  return (
    <div>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("snacking")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOY79V2Q-AwsvK1Y7Dtz-_8tiwpPSD9EF0A&usqp=CAU")',
        }}
      >
        <h1>LAYS</h1>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <p style={{ fontSize: "20px" }}>₹10 ! </p>
      </Button>
      &emsp;&emsp;
    </div>
  );
};
export default Spreads;

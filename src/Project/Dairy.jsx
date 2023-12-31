import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Dairy = () => {
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
        onClick={() => handleButtonClick("fruits&vegetables")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52FBMvjQy3DA4HaCkZF5K_mfwVlUcWDstgA&usqp=CAU")',
        }}
      >
        <h1>Milk</h1>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <p style={{ fontSize: "20px" }}>₹40 l ! </p>
      </Button>
    </div>
  );
};
export default Dairy;

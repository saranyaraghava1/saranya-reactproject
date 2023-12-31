import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Snacking = () => {
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
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("snacking")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIyZa3deiNUIDTqQXfnpc5Bq7CP-nBsIgKg&usqp=CAU")',
        }}
      >
        <h1>HIDE AND SEEK</h1>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <p style={{ fontSize: "20px" }}>₹30 ! </p>
      </Button>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("snacking")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("data:image/jpeg;base64,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")',
        }}
      >
        <h1>KURKURE</h1>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <p style={{ fontSize: "20px" }}>₹10 ! </p>
      </Button>
      &emsp;&emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("snacking")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNBZFLuhgxnWkJwvf-kT2GB6fXA39buSWxA&usqp=CAU")',
        }}
      >
        <h1>FRITOS</h1>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <p style={{ fontSize: "20px" }}>₹30 ! </p>
      </Button>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("snacking")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBtSmkaCuYHl9aqHaQu9sKgVlvaE5BsOmzw&usqp=CAU")',
        }}
      >
        <h1>LEXI'S</h1>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <p style={{ fontSize: "20px" }}>₹40 ! </p>
      </Button>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("snacking")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://compote.slate.com/images/79fb3cf9-c3a6-403c-b29a-d9bb6f086a36.jpeg?crop=1560%2C1040%2Cx0%2Cy0")',
        }}
      >
        <h1>SKITTLES'S</h1>
        &emsp;&emsp; &emsp;&emsp; &emsp;&emsp;
        <p style={{ fontSize: "20px", color: "darkblue" }}>₹10 ! </p>
      </Button>
      &emsp;&emsp;
    </div>
  );
};
export default Snacking;

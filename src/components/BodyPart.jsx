import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import logo from "../assets/icons/gym.png";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item.toUpperCase() ? "4px solid red" : "",
        width: "250px",
        height: "260px",
        bgcolor: "#FFF3F3",
      }}
    >
      <img
        src={logo}
        alt="Gym logo"
        style={{ width: "50px", height: "50px" }}

      />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "12px", lg: "18px" },
          mt: "20px",
        }}
      >
        {item.toUpperCase()}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

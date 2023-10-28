import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import banner from "../assets/images/banner.png";

const Banner = () => {
  return (
    <Box display=" flex " justifyContent="space-between" position="relative">
      <Stack
        gap={{lg:"40px", xs:"30px"}}
        height={{ xs: "450px", md: "985px" }}
        justifyContent="center"
        px="40px"
      >
      
        <Typography
          sx={{ color: "#FF2625", fontSize: "24px", fontWeight: "bold" }}
        >
          Fitness club
        </Typography>
        <Typography
          sx={{ fontSize: {lg:"52px", xs:"32px"}, fontWeight: "bold", width: {md:"380px", xs:"270px"} }}
        >
          Sweat, Smile and Repeat
        </Typography>
        <Typography sx={{ fontSize: "16px" }}>
          Chech out the most effective exercise personalized to you
        </Typography>
        <a
          href="#exercise"
          style={{
            textDecoration: "none",
            fontSize: "24px",
            width: "212px",
            padding: "14px 18px",
            background: "#FF2625",
            borderRadius: "10px",
            color: "white",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={()=>window.scrollTo({top:"1700", behavior:"smooth"})}
        >
          Explore Exercise
        </a>
        <Typography
          sx={{
            color: "#FF2625",
            opacity: "0.1",
            fontSize: "200px",
            fontWeight: "bold",
            display: { xs: "none", md: "block" },
          }}
          px={2}
        >
          Exercise
        </Typography>
      </Stack>
      <img src={banner} alt="banner" className="banner" />
    </Box>
  );
};

export default Banner;

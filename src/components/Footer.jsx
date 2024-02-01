import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/images/Logo.png"

const Footer = () => {
  return (
    <Box sx={{mt:"70px", bgcolor:"#FFF3F4" }}>
      <Stack alignItems="center" gap="10px" >
        <img src={logo} alt="Logo" /> Ethio Fitness Center Made by Betselot Abraham
      </Stack>
    </Box>
    );
};

export default Footer;

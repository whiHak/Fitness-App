import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "none",
        alignItems:"flex-end",
        pt: { sm: "32px", xs: "20px" },
        gap: { sm: "122px", xs: "40px " },
        px: "10px",
      }}
    >
      <Link>
        <img src={logo} alt="Logo" style={{ width: "48px", height: "48px" }} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" sx={{ width: {} }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
            height: "max-content",
            alignItems:"flex-end"
          }}
        >
          Home
        </Link>
        <a
          href="#exercise"
          style={{ textDecoration: "none", color: "#3A1212" }}
          onClick={()=>window.scrollTo({top:"1700", behavior:"smooth"})}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

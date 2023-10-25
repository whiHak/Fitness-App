import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const SearchExercise = () => {
  return (
    <Box sx={{width:{lg:"1448px", md:"auto"}, display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Stack alignItems="center" justifyContent="center">
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { lg: "44px", xs: "30px" },
            textAlign: "center",
            width: "100vw",
          }}
          px={5}
        >
          Awesome Exercises You <br />
          Should Know
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center">
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
              },
              width: { lg: "1000px", xs: "320px" },
            }}
            height="76px"
            value=""
            onChange={(e) => {}}
            type="text"
            placeholder="Search Exercise"
          />
          <Button
            className="search-btn"
            sx={{
              height: "56px",
              bgcolor: "#FF2625",
              borderRadius: "2px",
              width: { lg: "175px", xs: "80px" },
              color: "#fff",
              textTransform:"none",
            }}
          >
            Search
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercise;

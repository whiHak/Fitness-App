import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { options, fetchData } from "../utils/fetchData";

const SearchExercise = () => {
  const [data, setData] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyParts] = useState([])
  const [search, setSearch] = useState("");


  useEffect(async()=>{
    const categories = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
    setBodyParts(categories)
  }, [])

  const handleSearch = async () => {
    if (search) {
      const data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        options
      );

      const searchedExercises = data?.filter(
        (ex) =>
        ex.name.toLowerCase().includes(search) ||
        ex.target.toLowerCase().includes(search) ||
        ex.bodyPart.toLowerCase().includes(search) ||
        ex.equipment.toLowerCase().includes(search)
        );
        
        setExercises(searchedExercises);
        setSearch('')
        console.log(searchedExercises);
    }
  };

  return (
    <Box
      sx={{
        width: { lg: "1448px", md: "auto" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
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
              textTransform: "none",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercise;

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useContext,  useState } from "react";
import Scrollbar from "./Scrollbar";
import { ExerciseContext } from "../context/ExerciseContext";

const SearchExercise = ({bodyPart, setBodyPart}) => {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");
  const exercise = useContext(ExerciseContext);
  // console.log(exercise)

  const handleSearch = async () => {
    if (search) {
      const searchedExercises = exercise?.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search) ||
          ex.target.toLowerCase().includes(search) ||
          ex.bodyPart.toLowerCase().includes(search) ||
          ex.equipment.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="20px"
        >
          <TextField
            sx={{
              input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px",
              },
              width: { lg: "1000px", xs: "305px" },
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
        <Box
          alignItems="center"
          sx={{
            position: "relative",
            width: "90vw",
            p: "20px",
            m: " 20px 40px",
          }}
          className="scroll-bar"
        >
          <Scrollbar bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercise;

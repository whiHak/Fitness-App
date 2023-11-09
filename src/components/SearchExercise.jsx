import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useContext,  useState } from "react";
import Scrollbar from "./Scrollbar";
import { ExerciseContext } from "../context/ExerciseContext";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";
import { ResultContext } from "../context/ResultContext";

const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const exercise = useContext(ExerciseContext);
  const {data} = useContext(SelectedCategoryContext)
  const {Rdispatch} = useContext(ResultContext)
  // console.log(exercise)

  const handleSearch = async () => {
    if (search || data) {
      const searchedExercises = exercise?.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search || data.bodyPart.toLowerCase()) ||
          ex.target.toLowerCase().includes(search || data.bodyPart.toLowerCase()) ||
          ex.bodyPart.toLowerCase().includes(search || data.bodyPart.toLowerCase()) ||
          ex.equipment.toLowerCase().includes(search || data.bodyPart.toLowerCase())
      );

      Rdispatch({ type: "SET_RESULT", payload: searchedExercises });
      setSearch("");

      console.log(searchedExercises);
      window.scrollTo({top:"1700", behavior:"smooth"})
    }
  };

  console.log(data)
  return (
    <Box
      sx={{
        width: { lg: "98vw", md: "auto" },
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
            width: {xs:"98vw", lg:"98vw"},
            p: "20px",
            m: " 20px 40px",
          }}
          className="scroll-bar"
        >
          <Scrollbar />
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchExercise;

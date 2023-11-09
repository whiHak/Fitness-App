import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";
import { fetchData, options } from "../utils/fetchData";
import { ExerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import { ResultContext } from "../context/ResultContext";

const Exercise = () => {
  // const { data } = useContext(SelectedCategoryContext);
  const exercises = useContext(ExerciseContext);
  const {data} = useContext(ResultContext)

  // const [exercises, setExercises] = useState('');
  const {ex} = data
  console.log(ex)

  const CardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastExercise = currentPage * CardsPerPage;
  const indexOfFirstExercise = indexOfLastExercise - CardsPerPage;
  const exercisePerPage = ex?.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value)=> {
    setCurrentPage(value)

    window.scrollTo({top:"1700", behavior:"smooth"})

  }

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "110px" }, mt: "50px", p: "20px" }}
      justifyContent="center"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        position="relative"
        alignSelf="center"
      >
        Showing Result
      </Typography>
      <Stack
        flexWrap="wrap"
        gap={5}
        direction="row"
        sx={{ mt: "30px" }}
        justifyContent="center"
      >
        { exercisePerPage?.map((element) => (
          <ExerciseCard element={element} />
        ))}
      </Stack>
      <Stack direction="row" justifyContent="center" sx={{mt:"40px"}}>
        {ex.length > 6 && (
          <Pagination
            size="medium"
            shape="circular"
            count={Math.ceil(ex.length / CardsPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;

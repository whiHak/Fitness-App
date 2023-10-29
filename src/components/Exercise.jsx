import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";
import { fetchData, options } from "../utils/fetchData";
import { ExerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";

const Exercise = () => {
  const { data } = useContext(SelectedCategoryContext);
  const exercises = useContext(ExerciseContext);
  // const [exercises, setExercises] = useState('');
  // useEffect(() => {
  //   const fecth = async () => {
  //     const doc = await fetchData(
  //       `https://exercisedb.p.rapidapi.com/exercises?bodyPart=${data.bodyPart.toLowerCase()}`,
  //       options
  //     );
  //     setExercises(doc);
  //   };

  //   return () => {
  //     fecth();
  //   };
  // }, [data.bodyPart]);
  console.log(data);
  const CardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastExercise = currentPage * CardsPerPage;
  const indexOfFirstExercise = indexOfLastExercise - CardsPerPage;
  const exercisePerPage = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

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
        {exercisePerPage?.map((element) => (
          <ExerciseCard element={element} />
        ))}
      </Stack>
      <Stack direction="row" justifyContent="center" sx={{mt:"40px"}}>
        {exercises.length > 6 && (
          <Pagination
            size="medium"
            shape="circular"
            count={Math.ceil(exercises.length / CardsPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercise;

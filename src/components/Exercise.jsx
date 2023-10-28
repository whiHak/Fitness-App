import { Box, Stack, Typography } from "@mui/material";
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
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" }, mt: "50px", p: "20px" }} justifyContent="center">
      <Typography
        variant="h4"
        fontWeight="bold"
        position="relative"
        alignSelf="center"
      >
        Showing Result
      </Typography>
      <Stack flexWrap="wrap" gap={5} direction="row" sx={{mt:"30px"}} justifyContent="center">
        {exercises?.map((element) => (
          <ExerciseCard element={element} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercise;

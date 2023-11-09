import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import BodyPart from "./BodyPart";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";
import { ExerciseContext } from "../context/ExerciseContext";
import { ResultContext } from "../context/ResultContext";

const Scrollbar = () => {
  const items = useContext(CategoriesContext);
  const { dispatch } = useContext(SelectedCategoryContext);
  const exercise = useContext(ExerciseContext);
  const { Rdispatch } = useContext(ResultContext);

  const handleClick = (e) => {
    dispatch({ type: "CHANGE_CATRGORY", payload: e });
    if (e) {
      const categoryExercises = exercise?.filter(
        (ex) =>
          ex.name.toLowerCase().includes(e.toLowerCase()) ||
          ex.target.toLowerCase().includes(e.toLowerCase()) ||
          ex.bodyPart.toLowerCase().includes(e.toLowerCase()) ||
          ex.equipment.toLowerCase().includes(e.toLowerCase())
      );

      Rdispatch({ type: "SET_RESULT", payload: categoryExercises });
    }

    window.scrollTo({ top: "1700", behavior: "smooth" });
  };

  return (
    <Stack direction="row" sx={{ gap: "30px" }}>
      {items?.map((element, indx) => (
        <Box key={indx} onClick={() => handleClick(element)}>
          <BodyPart item={element} />
        </Box>
      ))}
    </Stack>
  );
};

export default Scrollbar;

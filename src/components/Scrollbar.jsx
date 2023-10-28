import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import BodyPart from "./BodyPart";
import { SelectedCategoryContext } from "../context/SelectedCategoryContext";

const Scrollbar = () => {
  const items = useContext(CategoriesContext);
  const {dispatch}  = useContext(SelectedCategoryContext);


  const handleClick = (e) => {
    console.log(e)
    dispatch({ type: "CHANGE_CATRGORY", payload: e });
    window.scrollTo({top:"1700", behavior:"smooth"})
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

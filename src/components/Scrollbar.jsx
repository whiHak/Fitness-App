import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import BodyPart from "./BodyPart";

const Scrollbar = ({ bodyPart, setBodyPart }) => {
  const items = useContext(CategoriesContext);

  return (
    <Stack direction="row" sx={{ gap: "30px" }}>
      {items?.map((element, indx) => (
        <Box key={indx} onClick={() => setBodyPart(element.toUpperCase())}>
          <BodyPart
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            item={element}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default Scrollbar;

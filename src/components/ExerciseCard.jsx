import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ element }) => {
  return (
    <Link to={`/exercise/${element.id}`} className="exercise-card">
      <img src={element.gifUrl} alt={element.name} />
      <Stack direction="row">
        <Button
          sx={{
            ml: "20px",
            color: "#FFF",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {element.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "20px",
            color: "#FFF",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {element.target}
        </Button>   
      </Stack>
      <Typography sx={{ml:"20px", fontWeight:"bold", textTransform:"capitalize", color:"#000"}}>{element.name}</Typography>
    </Link>
  );
};

export default ExerciseCard;

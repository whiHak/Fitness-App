import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ videos, name }) => {
  return (
    <Box p="20px" sx={{ mt: { lg: "200px", xs: "25px" } }}>
      <Typography variant="h3" mb="30px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "40px", xs: 0 } }}
        justifyContent="flexStart"
        alignItems="center"
        flexWrap="wrap"
      >
        {videos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target="__blank"
            rel="nonreferree"
          >
            <img src={item.video.thumbnails[0].url} />
            <Box>
              <Typography color="#000">
                {item.video.title}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Details, ExerciseVideos, RelatedVideos } from "./component";
import { useParams } from "react-router-dom";
import { fetchData, options, youtubeOptions } from "../utils/fetchData";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [relatedVideos, setRelatedVideos] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const fecth = async () => {
      const doc = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        options
      );
      setExerciseDetail(doc);
      const yDoc = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search/q=${exerciseDetail?.name}`,
        youtubeOptions
      );
      setRelatedVideos(yDoc)

    };

    return () => {
      fecth();
    };
  }, [id]);


  return (
    <Box>
      <Details  detail={exerciseDetail}  />
      <ExerciseVideos  videos ={relatedVideos}/>
      <RelatedVideos />
    </Box>
  );
};

export default ExerciseDetails;

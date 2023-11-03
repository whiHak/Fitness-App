import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Details, ExerciseVideos, RelatedVideos } from "./component";
import { useParams } from "react-router-dom";
import { fetchData, options, youtubeOptions } from "../utils/fetchData";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [relatedVideos, setRelatedVideos] = useState({})
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({top:"0", behavior:"smooth"})
    const fetchDataFromAPIs = async () => {
      try {
        const exdoc = await fetchData(
          ` https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
          options
        );
        setExerciseDetail(exdoc);

        const yDoc = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${exdoc?.name}`,
          youtubeOptions
        );
        setExerciseVideos(yDoc);

        const targetDoc = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/equipment/assisted?type=${exdoc?.target}`
        );
        setRelatedVideos(targetDoc)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromAPIs();
  }, [id]);
  console.log(relatedVideos)
  return (
    <Box>
      <Details detail={exerciseDetail} />
      <ExerciseVideos
        videos={exerciseVideos.contents}
        name={exerciseDetail.name}
      />
      <RelatedVideos />
    </Box>
  );
};

export default ExerciseDetails;

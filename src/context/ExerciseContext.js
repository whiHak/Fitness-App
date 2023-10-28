import { createContext, useEffect, useState } from "react";
import { fetchData, options } from "../utils/fetchData";

export const ExerciseContext = createContext();

export const ExerciseContextProvider = ({ children }) => {
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    const unsub = async () => {
      const data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        options
      );
      setExercise(data);
    };
    return () => {  
      unsub();
    };
  }, []);

  return (
    <ExerciseContext.Provider value={exercise}>
      {children}
    </ExerciseContext.Provider>
  );
};

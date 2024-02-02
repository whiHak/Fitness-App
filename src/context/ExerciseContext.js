import { createContext, useContext, useEffect, useState } from "react";
import { fetchData, options } from "../utils/fetchData";
import { CategoriesContext } from "./CategoriesContext";

export const ExerciseContext = createContext();

export const ExerciseContextProvider = ({ children }) => {
  const [exercise, setExercise] = useState([]);
  const bodyPart = useContext(CategoriesContext)

  useEffect(() => {
    const unsub = async () => {
      const data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises?limit=40`,
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

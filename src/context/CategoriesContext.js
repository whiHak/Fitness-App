import { createContext, useEffect, useState } from "react";
import { fetchData, options } from "../utils/fetchData";

export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const setOfCategories = async () => {
      const categories = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setBodyParts(["all", ...categories]);
      // console.log(categories)
    };
    return () => {
      setOfCategories();
    };
  }, []);

  return (
    <CategoriesContext.Provider value={bodyParts}>
      {children}
    </CategoriesContext.Provider>
  );
};

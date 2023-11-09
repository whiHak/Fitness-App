import { createContext, useEffect, useState } from "react";
import { fetchData, options } from "../utils/fetchData";

export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState(["ALL"]);

  useEffect(() => {
    const setOfCategories = async () => {
      const categories = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setBodyParts((prevBodyParts) => [...prevBodyParts, ...categories]);
    };

    setOfCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={bodyParts}>
      {children}
    </CategoriesContext.Provider>
  );
};
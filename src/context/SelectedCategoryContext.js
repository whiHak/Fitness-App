import { createContext, useReducer, useState } from "react";

export const SelectedCategoryContext = createContext();

export const SelectedCategoryContextProvider = ({ children }) => {
  const INITIAL_STATE = { bodyPart: "ALL" };
  const categoriesReducer = (state , action) => {
    if (action.type === "CHANGE_CATRGORY") {
      return { bodyPart: action.payload.toUpperCase() };
    } else return state;
  };

  const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);

  return (
    <SelectedCategoryContext.Provider value={{ data: state, dispatch }}>
      {children}
    </SelectedCategoryContext.Provider>
  );
};

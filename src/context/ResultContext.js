import { createContext, useContext, useReducer } from "react";
import { ExerciseContext } from "./ExerciseContext";

export const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const exercise = useContext(ExerciseContext);

  const INITIAL_STATE = {
    ex: exercise
  };

  const resultReducer = (state, action) => {
    if (action.type === "SET_RESULT") {
      return {
        ex: action.payload,
      };
    } else {
      return INITIAL_STATE;
    }
  };

  const [state, Rdispatch] = useReducer(resultReducer, INITIAL_STATE);

  return (
    <ResultContext.Provider value={{ data: state, Rdispatch }}>
      {children}
    </ResultContext.Provider>
  );
};

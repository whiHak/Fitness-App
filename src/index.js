import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ExerciseContextProvider } from "./context/ExerciseContext";
import { CategoriesContextProvider } from "./context/CategoriesContext";
import { SelectedCategoryContextProvider } from "./context/SelectedCategoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExerciseContextProvider>
        <CategoriesContextProvider>
          <SelectedCategoryContextProvider>
            <App />
          </SelectedCategoryContextProvider>
        </CategoriesContextProvider>
      </ExerciseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

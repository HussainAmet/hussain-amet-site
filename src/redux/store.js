import { configureStore } from "@reduxjs/toolkit";
import siteDataReducer from "./siteDataSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      siteData: siteDataReducer,
    },
  });

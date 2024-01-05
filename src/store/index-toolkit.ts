import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./home-toolkit/reducer";

export default configureStore({
  reducer: {
    tookitCounter: countReducer,
  },
});

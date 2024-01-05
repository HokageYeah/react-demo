import { configureStore } from "@reduxjs/toolkit";
import homeCountTookitReducer from "./home-toolkit/reducer";
import homeCountReducer from "./home/reducer";

export default configureStore({
  reducer: {
    tookitCounter: homeCountTookitReducer,
    home: homeCountReducer,
  },
});

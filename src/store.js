import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./components/tasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
